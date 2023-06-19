# --- BASE ---
FROM node:18-alpine AS base
# set for base and all layer that inherit from it
ENV NODE_ENV production

# --- INSTALL EDGEDB-JS ---
FROM base as edgedb-deps
WORKDIR /build
COPY package.json .
RUN echo '{"dependencies": {' $(grep -E -o '"edgedb":\s"(.*)"' package.json) '}}' > package.json && yarn install

# --- GENERATE EDGEDB QUERY BUILDER ---
FROM edgedb/edgedb:1 AS edgedb
COPY --from=edgedb-deps /usr/local/bin/node /usr/local/bin/node
RUN mkdir /build && chown edgedb:edgedb /build
USER edgedb
WORKDIR /build
COPY --from=edgedb-deps /build .
COPY dbschema dbschema
# The generated edgeql-js client will be at /build/generated!
RUN edgedb migration apply \
    -H localhost \
    --tls-security insecure \
    --wait-until-available 2m \
    && node ./node_modules/.bin/edgeql-js \
    -H localhost \
    --target cjs \
    --tls-security insecure \
    --output-dir generated

# --- INSTALL ALL DEPENDENCIES ---
FROM base as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock ./
# Set env to dev so we can build the client app
RUN NODE_ENV=development yarn install --frozen-lockfile


# # --- BUILD APP ---
# FROM base as build
# WORKDIR /app

# ADD . .

# COPY --from=deps /app/node_modules /app/node_modules
# COPY --from=edgedb /build/generated /app/app/db/edgeql

# # Prune out dev dependencies after building
# # https://github.com/yarnpkg/yarn/issues/696#issuecomment-258418656
# RUN yarn build && yarn install --production --ignore-scripts --prefer-offline


# # --- PROD IMAGE ---
# FROM base
# WORKDIR /app

# ADD . .

# COPY --from=build /app/node_modules /app/node_modules
# COPY --from=edgedb /build/generated /app/app/db/edgeql
# COPY --from=edgedb /usr/bin/edgedb /usr/bin/edgedb

# COPY --from=build /app/build /app/build
# COPY --from=build /app/public /app/public

# CMD ["yarn", "start"]

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
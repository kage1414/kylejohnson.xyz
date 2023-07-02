FROM scratch
WORKDIR /app
RUN cd ui
RUN yarn build

WORKDIR /app

CMD ["yarn", "start", "&", "go", "run", "."]


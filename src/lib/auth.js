import { defaults, seal, unseal } from '@hapi/iron';

const ironConfig = defaults;
ironConfig.encryption.minPasswordlength = Number(
  process.env.NEXT_PUBLIC_MIN_CHARS
);
ironConfig.integrity.minPasswordlength = Number(
  process.env.NEXT_PUBLIC_MIN_CHARS
);

export async function createLoginSession(session, secret) {
  const createdAt = Date.now();
  const obj = { ...session, createdAt };
  const token = await seal(obj, secret, defaults);

  return token;
}

export async function getLoginSession(token, secret) {
  const session = await unseal(token, secret, defaults);
  const expiresAt = session.createdAt + session.maxAge * 1000;

  // Validate the expiration date of the session
  if (session.maxAge && Date.now() > expiresAt) {
    throw new Error('Session expired');
  }

  return session;
}

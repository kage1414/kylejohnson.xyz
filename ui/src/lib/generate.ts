import crypto from 'crypto';

export const random32CharString = () => {
  return crypto.randomBytes(32).toString('hex');
};

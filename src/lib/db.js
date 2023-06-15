import crypto from 'crypto';

import {
  addUser,
  deleteUser as deleteUserDb,
  getAllUsers as getAllUsersDb,
  getInvite,
  getUser,
  getUserById,
  setRegisteredInvite,
  updateUser,
} from 'dbschema/queries';

import { client } from './edgedb';

const { SUPER_EMAIL } = process.env;

Error.stackTraceLimit = Infinity;

export function getAllUsers() {
  return getAllUsersDb(client);
}

export async function createUser({ username, password, name, email, key }) {
  const existingUser = await findUserByUsername(username);
  if (existingUser) {
    const err = new Error('The username has already been used');
    throw err;
  }
  const invite = await getInvite(client, { key });
  if (
    (invite && !invite.registered && invite.email === email) ||
    email === SUPER_EMAIL
  ) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
      .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
      .toString('hex');
    const user = {
      username,
      name,
      hash,
      salt,
      email,
      invite_id: invite?.id || '',
    };
    const newUser = await addUser(client, user);
    await setRegisteredInvite(client, { key });
    return newUser;
  } else {
    const err = new Error(
      'Invite not found. Please use the email your invite was sent to.'
    );
    throw err;
  }
}

export async function findUserByUsername(username) {
  const result = await getUser(client, { username });
  return result;
}

export async function findUserById(id) {
  const result = await getUserById(client, { id });
  return result;
}

export async function updateUserByUsername(username, update) {
  // Here you update the user based on id/username in the database
  // const user = await db.updateUserById(id, update)
  const user = await updateUser(client, { username, ...update });
  return user;
}

export async function deleteUser(username) {
  // Here you should delete the user in the database
  // await db.deleteUser(req.user)
  await deleteUserDb(client, { username });
}

// Compare the password of an already fetched user (using `findUserByUsername`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}

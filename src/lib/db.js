import crypto from 'crypto';

import {
  addUser,
  deleteUser as deleteUserDb,
  getAllUsers as getAllUsersDb,
  getInvite,
  getUser,
  getUserById,
  updateUser,
} from 'dbschema/queries';

import { client } from '../edgedb';

Error.stackTraceLimit = Infinity;

export function getAllUsers() {
  return getAllUsersDb(client);
}

export async function createUser({ username, password, name, email }) {
  const existingUser = await findUserByUsername(username);
  if (existingUser) {
    const err = new Error('The username has already been used');
    throw err;
  }
  const hasInvite = await getInvite(client, { email });
  if (hasInvite) {
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
    };
    const newUser = await addUser(client, user);
    return newUser;
  } else {
    const err = new Error('Invite not found');
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
  const user = await updateUser(client, update);
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

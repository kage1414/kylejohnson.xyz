import crypto from 'crypto';

import {
  addUser,
  deleteUser as deleteUserDb,
  getAllUsers as getAllUsersDb,
  getInvite,
  getUser,
  updateUser,
} from 'dbschema/queries';

import { client } from '../edgedb';

export function getAllUsers(req) {
  return getAllUsersDb(client);
}

export async function createUser(req, { username, password, name, email }) {
  const existingUser = await getUser(client, {
    username,
  });
  const hasInvite = await getInvite(client, { email });
  if (!existingUser && hasInvite) {
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

    await addUser(client, user);
  } else {
    const err = new Error('Invite not found');
    throw err;
  }
}

export async function findUserByUsername(username) {
  return await getUser(client, { username });
}

export async function updateUserByUsername(req, username, update) {
  // Here you update the user based on id/username in the database
  // const user = await db.updateUserById(id, update)
  const user = await updateUser(client, update);
  return user;
}

export async function deleteUser(req, username) {
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

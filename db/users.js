import { client } from "./index.js";
import bcrypt from "bcrypt";

const createUser = async ({ username, password, email }) => {
  const SALT_COUNT = 10;
  const pwHash = bcrypt.hashSync(password, SALT_COUNT);
  // const emailHash = bcrypt.hashSync(email, SALT_COUNT);

  try {
    const { rows: response } = await client.query(
      `
        INSERT INTO users(username, password, email)
        VALUES ($1, $2, $3)
        ON CONFLICT (email) DO NOTHING
        RETURNING *;
      `,
      [username, pwHash, email]
    );

    const user = response[0];
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async ({ email }) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
          SELECT * FROM users
          WHERE email=$1;
        `,
      [email]
    );

    return user;
  } catch (error) {
    throw error;
  }
};

const getUserById = async ({ id }) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
          SELECT * FROM users
          WHERE id=$1;
        `,
      [id]
    );

    delete user.password

    return user;
  } catch (error) {
    throw error;
  }
};

async function verifyPassword({ email, password }) {
  const user = await getUserByEmail({ email });
  const { password: hash } = user;
  const passwordCheck = await bcrypt.compareSync(password, hash);

  if (passwordCheck) {
    delete user.password;
    return user;
  }
}

const upgradeUserToAdmin = async ({ email }) => {
  try {
    await client.query(
      `
            UPDATE users
            SET "isAdmin"=true
            WHERE users.email=$1;
        `,
      [email]
    );

    const newAdminUser = await getUserByEmail({ email });
    delete newAdminUser.password;

    return newAdminUser;
  } catch (error) {
    throw error;
  }
};

const deactivateUser = async ({ email }) => {
  try {
    await client.query(
      `
            UPDATE users
            SET "isActive"=false
            WHERE users.email=$1;
        `,
      [email]
    );

    const deactivatedUser = await getUserByEmail({ email });
    delete deactivatedUser.password;

    return deactivatedUser;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const { rows: allUsers } = await client.query(
      `
        SELECT id, username, email, "isAdmin", "isActive"
        FROM users;
        `
    );

    return allUsers;
  } catch (error) {
    throw error;
  }
}

export {
  createUser,
  getUserByEmail,
  upgradeUserToAdmin,
  deactivateUser,
  verifyPassword,
  getUserById,
  getAllUsers
};

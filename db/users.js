import { client } from './index.js';
import bcrypt from 'bcrypt';

const createUser = async ({ username, password, email }) => {

    const SALT_COUNT = 10;
    const pwHash = bcrypt.hashSync(password, SALT_COUNT);
    const emailHash = bcrypt.hashSync(email, SALT_COUNT);
  
    try {
      const { rows: response } = await client.query(`
        INSERT INTO users(username, password, email)
        VALUES ($1, $2, $3)
        ON CONFLICT (email) DO NOTHING
        RETURNING *;
      `, [username, pwHash, emailHash]);
  
      const user = response[0];
      delete user.password;
      return user;
  
    } catch (error) {
      throw error;
    }
}

export { 
    createUser
 }
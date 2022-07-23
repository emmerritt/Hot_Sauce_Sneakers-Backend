import { client } from './index.js';

const createOrder = async ({userId}) => {
    try {
      const { rows: response } = await client.query(`
        INSERT INTO orders("userId")
        VALUES ($1)
        RETURNING *;
      `, [userId]);
      return response[0];
    } catch (error) {
      throw error;
    }
}

export { 
    createOrder
}
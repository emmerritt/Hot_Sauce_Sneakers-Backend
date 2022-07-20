import { client } from './index.js';

const createCartItem = async ({userId, inventoryId, count}) => {
    try {
      const { rows: response } = await client.query(`
        INSERT INTO carts("userId", "inventoryId", count)
        VALUES ($1, $2, $3)
        ON CONFLICT ("userId", "inventoryId") DO NOTHING
        RETURNING *;
      `, [userId, inventoryId, count]);
      return response[0];
    } catch (error) {
      throw error;
    }
}

export { 
    createCartItem
 }
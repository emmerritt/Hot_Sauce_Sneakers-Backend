import { client } from './index.js';

const createOrderHistoryItem = async ({userId, inventoryId, count}) => {
    try {
      const { rows: response } = await client.query(`
        INSERT INTO order_histories("orderId", "inventoryId", count)
        VALUES ($1, $2, $3)
        ON CONFLICT ("orderId", "inventoryId") DO NOTHING
        RETURNING *;
      `, [userId, inventoryId, count]);
      return response[0];
    } catch (error) {
      throw error;
    }
}

export { 
    createOrderHistoryItem
 }
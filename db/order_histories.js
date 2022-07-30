import { client } from "./index.js";

const createOrderHistoryItem = async ({ userId, inventoryId, count }) => {
  try {
    const { rows: response } = await client.query(
      `
        INSERT INTO order_histories("orderId", "inventoryId", count)
        VALUES ($1, $2, $3)
        ON CONFLICT ("orderId", "inventoryId") DO NOTHING
        RETURNING *;
      `,
      [userId, inventoryId, count]
    );
    return response[0];
  } catch (error) {
    throw error;
  }
};

const getUserOrderHistory = async ({ userId }) => {
  try {
    const sql = `
        SELECT order_histories.id, order_histories."orderId", order_histories."inventoryId", order_histories.count, users.id AS "userId", users.email 
        FROM order_histories 
        INNER JOIN orders
        ON ("order_histories"."orderId" = orders.id )
        INNER JOIN users
        ON ("orders"."userId" = users.id)
        WHERE users.id = $1;
      `;
    const { rows: response } = await client.query(sql, [userId]);

    return response;
  } catch (error) {
    throw error;
  }
};

export { createOrderHistoryItem, getUserOrderHistory };

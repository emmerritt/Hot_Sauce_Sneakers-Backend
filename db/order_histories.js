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

const getUserOrderHistory = async ({ username }) => {
  try {
    // const { rows: response } = await client.query(
    //   `
    //     SELECT * FROM
    //     order_histories;
    //   `
    // );
    const sql = `
        SELECT * FROM
        order_histories INNER JOIN orders
        ON( "order_histories"."orderId" = orders.id )
                                INNER JOIN users
        ON( "orders"."userId" = users.id )
        WHERE users.email = 'test@gmail.com';
      `;
    console.log(sql);
    const { rows: response } = await client.query(sql);

    return response;
  } catch (error) {
    throw error;
  }
};

export { createOrderHistoryItem, getUserOrderHistory };

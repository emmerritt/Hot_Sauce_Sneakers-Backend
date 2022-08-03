import { client } from "./index.js";

const createOrderHistoryItem = async ({ orderId, inventoryId, count, price }) => {
  try {
    const { rows: [orderItem] } = await client.query(
      `
        INSERT INTO order_histories("orderId", "inventoryId", count, "purchasePrice")
        VALUES ($1, $2, $3, $4)
        ON CONFLICT ("orderId", "inventoryId") DO NOTHING
        RETURNING *;
      `,
      [orderId, inventoryId, count, price]
    );
    return orderItem;
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

const getOrderItemsByOrderId = async (orderId) => {
  try {
    const sql = `
        SELECT order_histories.id, order_histories."orderId", order_histories."inventoryId", order_histories.count, order_histories."purchasePrice", products.name, products.image, sizes.gender, sizes.size, brands.name AS "brand"
        FROM order_histories 
        JOIN inventories ON order_histories."inventoryId"=inventories.id
        JOIN sizes ON inventories."sizeId"=sizes.id
        JOIN products ON inventories."productId"=products.id
        JOIN brands ON products."brandId"=brands.id
        WHERE order_histories."orderId"=$1;
      `;
    const { rows: response } = await client.query(sql, [orderId]);

    return response;
  } catch (error) {
    throw error;
  }
}

export { createOrderHistoryItem, getUserOrderHistory, getOrderItemsByOrderId };

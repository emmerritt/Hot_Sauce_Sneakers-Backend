import { 
  client,
  getOrderItemsByOrderId
} from './index.js';

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
};

const getOrderByOrderId = async (orderId) => {
  try {
    const { rows: [order] } = await client.query(`
      SELECT id AS "orderId", "userId", status
      FROM orders
      WHERE id=$1;
    `, [orderId]);

    const orderItems = await getOrderItemsByOrderId(orderId);

    order.items = orderItems;

    return order;
  } catch (error) {
    throw error;
  }
};

const getOrdersByUserId = async (userId) => {
  try {
    const { rows: orders } = await client.query(`
      SELECT *
      FROM orders
      WHERE "userId"=$1;
    `, [userId]);

    await Promise.all(orders.map(async (order) => {
      order.items = await getOrderItemsByOrderId(order.id);
    }))

    return orders;
  } catch (error) {
    throw error;
  }
};

const updateOrderStatus = async ({orderId, status}) => {
  try {
    const { rows: [order] } = await client.query(`
      UPDATE orders
      SET status=$1
      WHERE id=$2
      RETURNING *
    `, [status, orderId]);

    return order;
  } catch (error) {
    throw error;
  }
};

export { 
    createOrder,
    getOrderByOrderId,
    getOrdersByUserId,
    updateOrderStatus
};
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

const getCartItemsByUserId = async (userId) => {
    try {
        const { rows: items } = await client.query(`
          SELECT carts.count, inventories.id AS "inventoryId", products.id AS "productId", products.name, products.price, products.image, brands.name AS "brand", sizes.gender, sizes.size  FROM carts
          JOIN inventories
          ON carts."inventoryId"=inventories.id
          JOIN products
          ON inventories."productId"=products.id
          JOIN brands
          ON products."brandId"=brands.id
          JOIN sizes
          ON inventories."sizeId"=sizes.id
          WHERE carts."userId"=$1;
        `, [userId]);

        const cart = {
            userId,
            cart: items
        }

        return cart;
      } catch (error) {
        throw error;
      }
}

const updateCartItemCount = async ({userId, inventoryId, count}) => {
    try {
        await client.query(`
            UPDATE carts
            SET count=$1
            WHERE carts."userId"=$2 AND carts."inventoryId"=$3;
        `, [count, userId, inventoryId]);

        const updatedCart = await getCartItemsByUserId(userId);

        return updatedCart;
      } catch (error) {
        throw error;
      }
}

const removeCartItem = async ({userId, inventoryId}) => {
  try {
      await client.query(`
          DELETE FROM carts
          WHERE carts."userId"=$1 AND carts."inventoryId"=$2;
      `, [userId, inventoryId]);

      const updatedCart = await getCartItemsByUserId(userId);

      return updatedCart;
    } catch (error) {
      throw error;
    }
}

const removeAllCartItemsByUserId = async (userId) => {
  try {
    const removedCartItems = await getCartItemsByUserId(userId)

    await client.query(`
        DELETE FROM carts
        WHERE carts."userId"=$1;
    `, [userId]);

    return removedCartItems;
  } catch (error) {
    throw error;
  }
}

export { 
    createCartItem,
    getCartItemsByUserId,
    updateCartItemCount,
    removeCartItem,
    removeAllCartItemsByUserId
 }
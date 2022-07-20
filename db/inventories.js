import { client } from './index.js';

const createInventoryItem = async ({productId, sizeId, stock}) => {
    try {
      const { rows: response } = await client.query(`
        INSERT INTO inventories("productId", "sizeId", stock)
        VALUES ($1, $2, $3)
        ON CONFLICT ("productId", "sizeId") DO NOTHING
        RETURNING *;
      `, [productId, sizeId, stock]);
      return response[0];
    } catch (error) {
      throw error;
    }
}

const getAllProductsInStock = async () => {
    try {
        const { rows: products } = await client.query(`
          SELECT * FROM inventories
          JOIN sizes ON inventories."sizeId"=sizes.id
          WHERE inventories.stock>0;
        `);
        return products;
      } catch (error) {
        throw error;
      }
}

export { 
    createInventoryItem,
    getAllProductsInStock
 }
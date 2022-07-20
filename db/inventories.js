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

const getAllInventoryItemsInStock = async () => {
    try {
        const { rows: products } = await client.query(`
          SELECT inventories.*, products.name, products.price, products.image, sizes.gender, sizes.size, brands.name AS "brandName" FROM inventories
          JOIN sizes ON inventories."sizeId"=sizes.id
          JOIN products ON inventories."productId"=products.id
          JOIN brands ON products."brandId"=brands.id
          WHERE inventories.stock>0;
        `);
        return products;
      } catch (error) {
        throw error;
      }
}

const getAllSizesByProductId = async (id) => {
    try {
        const { rows: sizes } = await client.query(`
          SELECT inventories."sizeId", sizes.gender, sizes.size FROM inventories
          JOIN sizes
          ON sizes.id=inventories."sizeId"
          WHERE inventories."productId"=$1;
        `, [id]);

        const response = {
            productId: id,
            sizes
        }

        return response;
      } catch (error) {
        throw error;
      }
}

const getAllSizesInStockByProductId = async (id) => {
    try {
        const { rows: sizes } = await client.query(`
          SELECT inventories."sizeId", sizes.gender, sizes.size FROM inventories
          JOIN sizes
          ON sizes.id=inventories."sizeId"
          WHERE inventories."productId"=$1 AND inventories.stock>0;
        `, [id]);

        const response = {
            productId: id,
            sizes
        }

        return response;
      } catch (error) {
        throw error;
      }
}

const getStockByProductIdAndSize = async ({productId, sizeId}) => {
    try {
        const { rows: [stock] } = await client.query(`
          SELECT *
          FROM inventories
          WHERE "productId"=$1 AND "sizeId"=$2;
        `, [productId, sizeId]);
        return stock;
      } catch (error) {
        throw error;
      }
}

const updateStockByProductIdAndSize = async ({productId, sizeId, count}) => {

    const {stock} = await getStockByProductIdAndSize({productId, sizeId});
    const updatedStock = await stock - count;

    try {
        const { rows: [product] } = await client.query(`
            UPDATE inventories
            SET stock=$1
            WHERE inventories."productId"=$2 AND inventories."sizeId"=$3;
        `, [updatedStock, productId, sizeId]);

        const updatedInventoryItem = await getStockByProductIdAndSize({productId, sizeId});

        return updatedInventoryItem;
      } catch (error) {
        throw error;
      }
}

export { 
    createInventoryItem,
    getAllInventoryItemsInStock,
    getAllSizesInStockByProductId,
    getAllSizesByProductId,
    updateStockByProductIdAndSize,
    getStockByProductIdAndSize
 }
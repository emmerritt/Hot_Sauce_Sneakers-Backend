import { client } from './index.js';

const createProduct = async ({name, brandId, price, image}) => {
    try {
      const { rows: response } = await client.query(`
        INSERT INTO products(name, "brandId", price, image)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (name) DO NOTHING
        RETURNING *;
      `, [name, brandId, price, image]);
      return response[0];
    } catch (error) {
      throw error;
    }
}

const getAllProductsInStock = async () => {
    try {
        const { rows: products } = await client.query(`
          SELECT products.*, brands.name AS "brandName" FROM products
          JOIN brands
          ON brands.id=products."brandId"
          LEFT OUTER JOIN inventories 
          ON products.id=inventories."productId"
          WHERE inventories.stock>0
          GROUP BY products.id, brands.id;
        `);
        return products;
      } catch (error) {
        throw error;
      }
}

const getProductById = async (id) => {
    try {
        const { rows: [product] } = await client.query(`
          SELECT *, brands.name AS "brandName" FROM products
          JOIN brands
          ON brands.id=products."brandId"
          WHERE products.id=$1;
        `, [id]);
        return product;
      } catch (error) {
        throw error;
      }
}

export { 
    createProduct,
    getAllProductsInStock,
    getProductById
 }
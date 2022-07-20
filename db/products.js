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

export { 
    createProduct
 }
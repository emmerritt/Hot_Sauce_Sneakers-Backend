import { client } from './index.js';

const createBrand = async ({name}) => {
    try {
      const { rows: response } = await client.query(`
        INSERT INTO brands(name)
        VALUES ($1)
        ON CONFLICT (name) DO NOTHING
        RETURNING *;
      `, [name]);
      return response[0];
    } catch (error) {
      throw error;
    }
}

const getAllBrands = async () => {
    try {
        const { rows: brands } = await client.query(`
          SELECT * FROM brands;
        `);
        return brands;
      } catch (error) {
        throw error;
      }
}

const getBrandByBrandId = async (id) => {
    try {
        const { rows: [brand] } = await client.query(`
          SELECT * FROM brands
          WHERE id=$1;
        `, [id]);
        return brand;
      } catch (error) {
        throw error;
      }
}

export { 
    createBrand,
    getAllBrands,
    getBrandByBrandId
}
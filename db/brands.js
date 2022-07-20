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

export { 
    createBrand
}
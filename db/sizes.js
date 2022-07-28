import { client } from './index.js';

const createSize = async ({size, gender}) => {
    try {
      const { rows: response } = await client.query(`
        INSERT INTO sizes(size, gender)
        VALUES ($1, $2)
        ON CONFLICT (size, gender) DO NOTHING
        RETURNING *;
      `, [size, gender]);
      return response[0];
    } catch (error) {
      throw error;
    }
}

const getAllSizes = async () => {
    try {
        const { rows: sizes } = await client.query(`
          SELECT * FROM sizes;
        `);
        return sizes;
      } catch (error) {
        throw error;
      }
}

const getSizeById = async (id) => {
    try {
        const { rows: response } = await client.query(`
          SELECT * FROM sizes
          WHERE sizes.id=$1;
        `, [id]);
        return response[0];
      } catch (error) {
        throw error;
      }
}

const deleteSize = async (id) => {
  try {
    const deletedSize = await getSizeById(id);
    await client.query(`
      DELETE FROM sizes
      WHERE id=$1;
    `, [id]);
    return deletedSize;
  } catch (error) {
    throw error;
  }
}

export { 
    createSize,
    getAllSizes,
    getSizeById,
    deleteSize
 }
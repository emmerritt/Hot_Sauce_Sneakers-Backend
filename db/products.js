import { 
    client,
    getAllSizesInStockByProductId,
    getInventoryItemsByProductId,
    deleteInventoryItemById
 } from './index.js';

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

const getAllProducts = async () => {
    try {
        const { rows: products } = await client.query(`
          SELECT products.*, brands.name AS "brand" FROM products
          JOIN brands
          ON brands.id=products."brandId";
        `);
        return products;
      } catch (error) {
        throw error;
      }
}

const getAllProductsInStock = async () => {
    try {
        const { rows: products } = await client.query(`
          SELECT products.*, brands.name AS "brand" FROM products
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

// We may want to rewrite this, or create an additional
// if we want to have filter options that allow you to see all products by gender
const getAllProductsInStockBySize = async (sizeId) => {
    try {
        const { rows: products } = await client.query(`
          SELECT products.*, brands.name AS "brand" FROM products
          JOIN brands
          ON brands.id=products."brandId"
          LEFT OUTER JOIN inventories 
          ON products.id=inventories."productId"
          WHERE inventories.stock>0 AND inventories."sizeId"=$1
          GROUP BY products.id, brands.id;
        `, [sizeId]);
        return products;
      } catch (error) {
        throw error;
      }
}

const getAllProductsInStockByBrand = async (brandId) => {
    try {
        const { rows: products } = await client.query(`
          SELECT products.*, brands.name AS "brand" FROM products
          JOIN brands
          ON brands.id=products."brandId"
          LEFT OUTER JOIN inventories 
          ON products.id=inventories."productId"
          WHERE inventories.stock>0 AND products."brandId"=$1
          GROUP BY products.id, brands.id;
        `, [brandId]);
        return products;
      } catch (error) {
        throw error;
      }
}

const getProductById = async (id) => {
    try {
        const { rows: [product] } = await client.query(`
          SELECT *, brands.name AS "brand" FROM products
          JOIN brands
          ON brands.id=products."brandId"
          WHERE products.id=$1;
        `, [id]);

        const { sizes } = await getAllSizesInStockByProductId(id);

        product.sizes = sizes;
        console.log(product)

        return product;
      } catch (error) {
        throw error;
      }
}

const updateProduct = async ({id, ...fields}) => {

    const setString = Object.keys(fields).map(
        (key, index) => `"${ key }"=$${ index + 1 }`
      ).join(', ');
    
      try {
        if (setString.length > 0) {
          const { rows: [product] } = await client.query(`
            UPDATE products
            SET ${ setString }
            WHERE "id"=${ id }
            RETURNING *;
          `, Object.values(fields));
    
          return product;
        }
      } catch (error) {
        throw error;
      }
}

const deleteProduct = async (id) => {
    try {
        const deletedProduct = getProductById(id)

        const allProductInventory = await getInventoryItemsByProductId(id)

        await Promise.all(allProductInventory.map(async (inventoryItem) => {
            const inventoryId = inventoryItem.id
            await deleteInventoryItemById(inventoryId);
        }))
        
        await client.query(`
            DELETE FROM products
            WHERE "id"=$1;
        `, [id]);

        return deletedProduct;
      } catch (error) {
        throw error;
      }
}

export { 
    createProduct,
    getAllProductsInStock,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getAllProductsInStockBySize,
    getAllProductsInStockByBrand
 }
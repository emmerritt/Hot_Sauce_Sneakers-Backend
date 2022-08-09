import { client } from './index.js';
import { 
    createUser,
    createBrand,
    createSize,
    createProduct,
    createInventoryItem,
    createCartItem,
    createOrder,
    createOrderHistoryItem,
    upgradeUserToAdmin
 } from './index.js';

 import { 
  testBrands, 
  testProducts, 
  testSizes, 
  testInventory, 
  testAdmins, 
  testUsers,
  testOrders,
  testOrderHistory 
} from './test_data.js';

const dropTables = async () => {
    try {
        console.log("Starting to drop tables...");

        await client.query(`
        DROP TABLE IF EXISTS carts;
        DROP TABLE IF EXISTS order_histories;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS inventories;
        DROP TABLE IF EXISTS sizes;
        DROP TABLE IF EXISTS products;
        DROP TABLE IF EXISTS brands;
        `);

        console.log("Finished dropping tables!");
    } catch (error) {
        console.error("Error dropping tables!");
        throw error;
    }
}

const createTables = async () => {
    try {
        console.log("Starting to build tables...");
    
        await client.query(`
          CREATE TABLE brands (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL
          );
          CREATE TABLE products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            "brandId" INTEGER REFERENCES brands(id),
            price MONEY,
            image TEXT
          );
          CREATE TABLE sizes (
            id SERIAL PRIMARY KEY,
            size NUMERIC,
            gender VARCHAR(255),
            UNIQUE(size, gender)
          );
          CREATE TABLE inventories (
            id SERIAL PRIMARY KEY,
            "productId" INTEGER REFERENCES products(id),
            "sizeId" INTEGER REFERENCES sizes(id),
            stock INTEGER,
            UNIQUE("productId", "sizeId")
          );
          CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255),
            password TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            "isAdmin" BOOLEAN DEFAULT false,
            "isActive" BOOLEAN DEFAULT true
          );
          CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(id),
            status VARCHAR(255) DEFAULT 'New'
          );
          CREATE TABLE order_histories (
            id SERIAL PRIMARY KEY,
            count INTEGER,
            "orderId" INTEGER REFERENCES orders(id),
            "inventoryId" INTEGER REFERENCES inventories(id),
            "purchasePrice" MONEY,
            UNIQUE("orderId", "inventoryId")
          );
          CREATE TABLE carts (
            id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(id),
            "count" INTEGER,
            "inventoryId" INTEGER REFERENCES inventories(id),
            UNIQUE("userId", "inventoryId")
          );
        `);
    
        console.log("Finished building tables!");
      } catch (error) {
        console.error("Error building tables!");
        throw error;
    }
};

const rebuildDB = async () => {
    try {
      client.connect();
  
      await dropTables();
      await createTables();

    } catch (error) {
      throw error;
    }
};

const testDB = async () => {
    const testUser = {
        username: 'testuser',
        password: 'testpassword',
        email: 'test@email.com'
    };
    const newUser = await createUser(testUser);
    console.log("New user: ");
    console.log(newUser);

    const seededUsers = await Promise.all(testUsers.map(createUser));
    const seededAdmins = await Promise.all(testAdmins.map(createUser));
    const seededAdminsUpgraded = await Promise.all(seededAdmins.map(upgradeUserToAdmin));
    const seededBrands = await Promise.all(testBrands.map(createBrand));
    const seededProducts = await Promise.all(testProducts.map(createProduct));
    const seededSizes = await Promise.all(testSizes.map(createSize));
    const seededInventory = await Promise.all(testInventory.map(createInventoryItem));
    const seedOrders = await Promise.all(testOrders.map(createOrder));
    const seedOrderItems = await Promise.all(testOrderHistory.map(createOrderHistoryItem));
    const seededCart = await createCartItem({userId: 1, inventoryId: 5, count: 3});
    const seededCart2 = await createCartItem({userId: 1, inventoryId: 6, count: 1});
}

rebuildDB()
    .then(testDB)
    .catch(console.error)
    .finally(() => client.end());
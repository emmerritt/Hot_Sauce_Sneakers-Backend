import client from './client.js';

async function dropTables() {
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

async function createTables() {
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
            username VARCHAR(255) UNIQUE NOT NULL,
            password TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            "isAdmin" BOOLEAN,
            "isActive" BOOLEAN
          );
          CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            "userId" INTEGER REFERENCES users(id)
          );
          CREATE TABLE order_histories (
            id SERIAL PRIMARY KEY,
            count INTEGER,
            "orderId" INTEGER REFERENCES orders(id),
            "inventoryId" INTEGER REFERENCES inventories(id),
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
}

async function rebuildDB() {
    try {
      client.connect();
  
      await dropTables();
      await createTables();
    } catch (error) {
      throw error;
    }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());
import pkg from 'pg';
const { Client } = pkg;

const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/hot-sauce-sneakers-db';

const client = new Client(connectionString);

// const client = new Client({
//   connectionString
//   connectionString,
//   ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
// });

// module.exports = { client };
export default client;
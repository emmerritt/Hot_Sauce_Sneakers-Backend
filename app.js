import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
const app = express()

// Middleware and API Router setup

// Import and use morgan
import morgan from 'morgan';
app.use(morgan('dev'));

// import and use cors
import cors from 'cors';
app.use(cors());

// json body logging
app.use(express.json())

// import client from db directory
import { client } from './db/index.js';
client.connect();

app.use((req, res, next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");
  
    next();
});

import router from './api/index.js'
app.use('/api', router);

export default app;

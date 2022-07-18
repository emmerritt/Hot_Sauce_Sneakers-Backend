// const http = require("http")
import http from 'http';
import chalk from 'chalk';
import app from './app.js';
// const app = require("./app")

const PORT = process.env["PORT"] ?? 3000
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(
    chalk.blueBright("Server is listening on PORT:"),
    chalk.yellow(PORT),
    chalk.blueBright("Get your routine on!")
  )
})

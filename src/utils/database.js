// const { port } = require("pg/lib/defaults");
const { Sequelize } = require("sequelize");
require("dotenv").config();

// crear instancia con parametros de configuracion para nuestra base de datos
const db = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: "postgres", // la base que estamos usando
    logging: false /// sirve para que no muestre todo lo que esta haciendo en si lo silencia
});


module.exports = db;
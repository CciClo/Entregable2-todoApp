const { port } = require("pg/lib/defaults");
const { Sequelize } = require("sequelize");

// crear instancia con parametros de configuracion para nuestra base de datos
const db = new Sequelize({
    database: "todoapp",
    username: "postgres",
    host: "localhost",
    port: "5432",
    password: "elperropiano",
    dialect: "postgres" // la base que estamos usando
});


module.exports = db;
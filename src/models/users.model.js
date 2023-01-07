/// instancia para la conexion de la db
const db = require('../utils/database');
// tipos de datos de sequelize
const { DataTypes } = require("sequelize");


// definir el modelo de usuarios
// lod modelos se define con una Mayuscula

const Users = db.define("users", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Users;
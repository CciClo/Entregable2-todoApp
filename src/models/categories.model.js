const db = require('../utils/database');

const { DataTypes } = require('sequelize');
const Users = require('./users.model');


const Categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // unique: true, 
        field:"user_id",
        references: {
            model: Users,
            key: "id"
        }
    }
},{
    timestamps: false,
}
);

module.exports = Categories;
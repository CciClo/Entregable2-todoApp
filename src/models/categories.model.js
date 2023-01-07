const db = require('../utils/database');

const { DataTypes } = require('sequelize');


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
    }
},{
    timestamps: false,
}
);

module.exports = Categories;
const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        title: { type: DataTypes.STRING, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        age: { type: DataTypes.STRING, allowNull: false }
    };

    return sequelize.define('List', attributes);
}
const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.STRING, allowNull: false }
    };

    return sequelize.define('Test', attributes);
}
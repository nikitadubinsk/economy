"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    static associate(models) {
      Transactions.hasOne(models.Clients, {
        foreignKey: "clientId",
        as: "clientTransactions"
      });
      Transactions.belongsTo(models.SpendingCategories, {
        foreignKey: "categoryId",
        as: "category"
      });
    }
  }
  Transactions.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    
      },
      sum: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Transactions"
    }
  );
  return Transactions;
};
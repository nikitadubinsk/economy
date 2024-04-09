"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SpendingCategories extends Model {
    static associate(models) {
      SpendingCategories.hasOne(models.Transactions, {
        foreignKey: "categoryId",
        as: "category"
      });
    }
  }
  SpendingCategories.init(
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
      }
    },
    {
      sequelize,
      paranoid: true,
      modelName: "SpendingCategories"
    }
  );
  return SpendingCategories;
};
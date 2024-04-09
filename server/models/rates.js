"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Rates extends Model {
    static associate(models) {
      // Rates.hasOne(models.Clients, {
      //   onDelete: "cascade",
      //   foreignKey: "rateId",
      //   as: "rate"
      // });
    }
  }
  Rates.init(
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
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      maxUsers: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Rates"
    }
  );
  return Rates;
};
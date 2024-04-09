"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MoneyBoxes extends Model {
    static associate(models) {
      MoneyBoxes.hasOne(models.Clients, {
        foreignKey: "clientId",
        as: "clientMoneyBoxes"
      });
    }
  }
  MoneyBoxes.init(
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
      sumPlan: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      sumFact: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      dateEnd: {
        type: DataTypes.STRING,
        allowNull: true
      },
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "MoneyBoxes"
    }
  );
  return MoneyBoxes;
};
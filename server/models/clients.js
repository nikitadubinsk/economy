"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    static associate(models) {
      Clients.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "user",
      });
      Clients.belongsTo(models.MoneyBoxes, {
        foreignKey: "clientId",
        as: "clientMoneyBoxes",
      });
      Clients.belongsTo(models.Transactions, {
        foreignKey: "clientId",
        as: "clientTransactions",
      });
    }
  }
  Clients.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      monthlyBudget: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      amountOnAccount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rateId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      dateOfBitrh: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Clients"
    }
  );
  return Clients;
};

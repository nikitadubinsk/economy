"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Finances extends Model {
    static associate(models) {
      Finances.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "user"
      });
    }
  }
  Finances.init(
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
      budget: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Finances"
    }
  );
  return Finances;
};
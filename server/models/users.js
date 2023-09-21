"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasOne(models.Finances, {
        foreignKey: "userId",
        as: "user"
      });
      Users.belongsTo(models.Roles, {
        foreignKey: "roleId",
        as: "roles"
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
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Users"
    }
  );
  return Users;
};
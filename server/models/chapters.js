"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Chapters extends Model {
    static associate(models) {
      // Chapters.hasMany(models.Stories, {
      //   foreignKey: "roleId",
      //   as: "roles"
      // });
    }
  }
  Chapters.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false
      },
      text: {
        type: DataTypes.STRING,
        allowNull: true
      },
      answers: {
        type: DataTypes.STRING,
        allowNull: true
      },
      correctAnswer: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      storyId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Chapters"
    }
  );
  return Chapters;
};
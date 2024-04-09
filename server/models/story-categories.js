"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class StoryCategories extends Model {
    static associate(models) {
      StoryCategories.hasOne(models.Stories, {
        onDelete: "cascade",
        foreignKey: "categoryId",
        as: "category"
      });
    }
  }
  StoryCategories.init(
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
      modelName: "StoryCategories"
    }
  );
  return StoryCategories;
};
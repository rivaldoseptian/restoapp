"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: "UserId",
      });
      Order.belongsTo(models.Menu, {
        foreignKey: "MenuId",
      });
    }
  }
  Order.init(
    {
      UserId: DataTypes.INTEGER,
      MenuId: DataTypes.INTEGER,
      order: DataTypes.INTEGER,
      keterangan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  Order.beforeCreate((pesan, option) => {
    (pesan.order = 0), (pesan.keterangan = "-");
  });
  return Order;
};

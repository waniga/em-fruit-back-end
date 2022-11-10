const {
  ORDER_SHIPPING,
  ORDER_SUCCESS,
  ORDER_PREPARING
} = require('../config/constants');

module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    'Orders',
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      orderStatus: {
        type: DataTypes.ENUM(ORDER_PREPARING, ORDER_SHIPPING, ORDER_SUCCESS),
        allowNull: false,
        defaultValue: ORDER_PREPARING
      }
    },
    { underscored: true }
  );

  Orders.associate = (db) => {
    Orders.belongsTo(db.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });
    Orders.hasMany(db.OrderItems, {
      foreignKey: {
        name: 'ordersId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };

  return Orders;
};

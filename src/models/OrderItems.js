module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define(
    'OrderItems',
    {
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    { underscored: true }
  );

  OrderItems.associate = (db) => {
    OrderItems.belongsTo(db.Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    OrderItems.belongsTo(db.Orders, {
      foreignKey: {
        name: 'ordersId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };

  return OrderItems;
};

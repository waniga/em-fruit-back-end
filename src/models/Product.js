module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      image: {
        type: DataTypes.STRING
      }
    },
    { underscored: true }
  );

  Product.associate = (db) => {
    Product.hasMany(db.OrderItems, {
      foreignKey: {
        name: 'productId',
        allowNull: true
      },
      onDelete: 'RESTRICT'
    });
  };

  return Product;
};

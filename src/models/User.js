const { MODE_USER, MODE_ADMIN } = require('../config/constants');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      mobile: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.ENUM(MODE_USER, MODE_ADMIN),
        allowNull: false,
        defaultValue: MODE_USER
      }
    },
    { underscored: true }
  );

  User.associate = (db) => {
    User.hasMany(db.Orders, {
      foreignKey: {
        name: 'userId',
        allowNull: true
      },
      onDelete: 'CASCADE'
    });
  };

  return User;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const InCart = sequelize.define('InCart', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  InCart.associate = function(models) {
    // associations can be defined here
    // InCart.HasMany(models.Pro)
    InCart.belongsTo(models.User,{
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
    InCart.belongsTo(models.Product, {
      foreignKey: 'productId',
      onDelete: 'CASCADE'
    })
  };
  return InCart;
};
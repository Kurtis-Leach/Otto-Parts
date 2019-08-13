'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    ordered: DataTypes.BOOLEAN
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Order,{
      foreignKey: 'orderId'
    })
    Product.hasMany(models.InCart,{
      foreignKey: 'productId'
    })
    
  };
  return Product;
};
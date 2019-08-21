'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    type: DataTypes.STRING,
    color: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    ordered: DataTypes.BOOLEAN,
    orderId: DataTypes.INTEGER
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
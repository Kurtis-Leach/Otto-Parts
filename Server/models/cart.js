'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    name: DataTypes.STRING
  }, {});
  Cart.associate = function(models) {
    // associations can be defined here
    // Cart.hasOne(models.User, {as: 'userId'})
    // Cart.hasMany(models.inCart,{
    //   foreignKey: 'cartId',
    //   as: 'carts'
    // })
  };
  return Cart;
};
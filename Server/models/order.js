'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User,{
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
    Order.hasMany(models.Product,{
      foreignKey: 'orderId',
      as: 'products'
    })
  };
  return Order;
};
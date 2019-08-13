'use strict';
module.exports = (sequelize, DataTypes) => {
  const InCart = sequelize.define('InCart', {
    name: DataTypes.STRING
  }, {});
  InCart.associate = function(models) {
    // associations can be defined here
    // InCart.HasMany(models.Pro)
    InCart.belongsTo(models.User,{
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return InCart;
};
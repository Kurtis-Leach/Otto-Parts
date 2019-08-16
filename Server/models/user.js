'use strict';
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_digest:{
      type: DataTypes.STRING
    },
    password: {
        type: DataTypes.VIRTUAL,
        set: function(val){
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(val, salt);
            this.setDataValue('password_digest', hash)
        }
    },
    auth_token: {
        type: DataTypes.VIRTUAL,
        get: function(){
            return jwt.encode({ id: this.id}, 'jsdaknfioed0243895')
        }
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Order,{
      foreignKey: 'userId',
      as: 'orders'
    })
    // User.hasOne(models.Cart,{as: 'cartId'})
    User.hasMany(models.InCart,{
      foreignKey: 'userId',
      as: 'users'
    })
    
  };
  return User;
};
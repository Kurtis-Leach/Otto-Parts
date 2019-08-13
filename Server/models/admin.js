'use strict';
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    name: DataTypes.STRING,
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
  },
   {});
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};
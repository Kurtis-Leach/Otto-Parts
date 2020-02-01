'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password_digest:{
        type: Sequelize.STRING
      },
      // password: {
      //     type: Sequelize.VIRTUAL,
      //     set: function(val){
      //         const salt = bcrypt.genSaltSync(10);
      //         const hash = bcrypt.hashSync(val, salt);
      //         this.setDataValue('password_digest', hash)
      //     }
      // },
      // auth_token: {
      //     type: Sequelize.VIRTUAL,
      //     get: function(){
      //         return jwt.encode({ id: this.id}, 'jsdaknfioed0243895')
      //     }
      // },
      // cartId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'Carts',
      //     key: 'id',
      //     as: 'cartId'
      //   }
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
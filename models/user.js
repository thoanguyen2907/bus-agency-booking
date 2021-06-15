'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Ticket}) {
      // define association here
      this.hasMany(Ticket, {foreignKey: "user_id"})
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    numberPhone: DataTypes.STRING,
    type: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
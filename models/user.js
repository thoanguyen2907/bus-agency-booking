'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
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
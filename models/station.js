'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Trip}) {
      // define association here
      this.hasMany(Trip, {foreignKey: "fromStation"}); 
      this.hasMany(Trip, {foreignKey: "toStation"}); 

    }
  };
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        len: [3,30],
      }
    },
   
    address:{
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        isIn: [['SG', 'LA', 'CM']], 
      }
    },
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};
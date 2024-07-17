'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Semilla extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Semilla.hasMany(models.Silo,{
        foreignKey:'idSemilla'
      })
    }
  }
  Semilla.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Semilla',
  });
  return Semilla;
};
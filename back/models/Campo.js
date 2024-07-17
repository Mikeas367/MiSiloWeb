'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Campo.hasMany(models.Silo, {
        foreignKey:'idCampo'
      })
    }
  }
  Campo.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Campo',
  });
  return Campo;
};
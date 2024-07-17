'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Silo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Silo.belongsTo(models.Campo,{
        foreignKey:'idCampo',
        target_Key:'id'
      })

      Silo.belongsTo(models.Semilla,{
        foreignKey:'idSemilla',
        target_Key:'id'
      })

      Silo.belongsTo(models.TipoSilo,{
        foreignKey:'idTipoSilo',
        target_Key:'id'
      })

    }
  }
  Silo.init({
    idCampo: DataTypes.INTEGER,
    idSemilla: DataTypes.INTEGER,
    idTipoSilo: DataTypes.INTEGER,
    cantidad: DataTypes.FLOAT,
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Silo',
  });
  return Silo;
};
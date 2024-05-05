'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editora extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Editora.init({
    nome: DataTypes.STRING,
    data_fundacao: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'editora',
    tableName: 'editoras'
  });
  return Editora;
};
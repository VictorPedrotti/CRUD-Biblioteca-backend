'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {
    static associate(models) {
      Genero.hasMany(models.Livro, {
        foreignKey: 'genero_id'
      });
    }
  }
  Genero.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genero',
    tableName: 'generos'
  });
  return Genero;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      Autor.hasMany(models.Livro, {
        foreignKey: 'autor_id'
      });
    }
  }
  Autor.init({
    nome: DataTypes.STRING,
    nacionalidade: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Autor',
    tableName: 'autores'
  });
  return Autor;
};
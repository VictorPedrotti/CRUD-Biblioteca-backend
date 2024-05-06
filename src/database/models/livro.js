'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      Livro.belongsTo(models.Genero, {
        foreignKey: 'genero_id'
      });
      Livro.belongsTo(models.Editora, {
        foreignKey: 'editora_id'
      });
      Livro.belongsTo(models.Autor, {
        foreignKey: 'autor_id'
      });
      Livro.belongsTo(models.Fornecedor, {
        foreignKey: 'fornecedor_id'
      });
      Livro.hasMany(models.Avaliacao, {
        foreignKey: 'livro_id'
      });
      Livro.hasMany(models.ItensPedido, {
        foreignKey: 'livro_id'
      });
    }
  }
  Livro.init({
    titulo: DataTypes.STRING,
    data_publicacao: DataTypes.DATEONLY,
    preco: DataTypes.DECIMAL,
    numero_paginas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livro',
    tableName: 'livros'
  });
  return Livro;
};
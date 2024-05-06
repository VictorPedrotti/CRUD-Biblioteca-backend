'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fornecedor extends Model {
    static associate(models) {
      Fornecedor.hasMany(models.Livro, {
        foreignKey: 'fornecedor_id'
      });
    }
  }
  Fornecedor.init({
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fornecedor',
    tableName: 'fornecedores'
  });
  return Fornecedor;
};
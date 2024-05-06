'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormaPagamento extends Model {
    static associate(models) {
      FormaPagamento.hasMany(models.Pedido, {
        foreignKey: 'forma_pagamento_id'
      });
    }
  }
  FormaPagamento.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FormaPagamento',
    tableName: 'formas_pagamento'
  });
  return FormaPagamento;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    static associate(models) {
      Pedido.belongsTo(models.Cliente, {
        foreignKey: 'cliente_id'
      });
      Pedido.belongsTo(models.FormaPagamento, {
        foreignKey: 'forma_pagamento_id'
      });
      Pedido.hasMany(models.ItensPedido, {
        foreignKey: 'pedido_id',
        as: 'todosItensPedido'
      });
    }
  }
  Pedido.init({
    data_pedido: DataTypes.DATEONLY,
    total: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Pedido',
    tableName: 'pedidos'
  });
  return Pedido;
};
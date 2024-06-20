'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Avaliacao, {
        foreignKey: 'cliente_id',
        as: 'AvaliacoesCliente'
      });
      Cliente.hasMany(models.Pedido, {
        foreignKey: 'cliente_id',
        as: 'PedidosCliente'
      });
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes'
  });
  return Cliente;
};
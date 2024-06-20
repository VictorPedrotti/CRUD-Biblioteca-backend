'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItensPedido extends Model {
    static associate(models) {
      ItensPedido.belongsTo(models.Pedido, {
        foreignKey: 'pedido_id',
      });
      ItensPedido.belongsTo(models.Livro, {
        foreignKey: 'livro_id'
      });
    }
  }
  ItensPedido.init({
    quantidade: DataTypes.INTEGER,
    preco_unitario: DataTypes.DECIMAL,
    subtotal: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ItensPedido',
    tableName: 'itens_pedidos'
  });
  return ItensPedido;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItensPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
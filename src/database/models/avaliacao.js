'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacao extends Model {
    static associate(models) {
      Avaliacao.belongsTo(models.Livro, {
        foreignKey: 'livro_id'
      });
      Avaliacao.belongsTo(models.Cliente, {
        foreignKey: 'cliente_id'
      });
    }
  }
  Avaliacao.init({
    data_avaliacao: DataTypes.DATEONLY,
    avaliacao: DataTypes.INTEGER,
    comentario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Avaliacao',
    tableName: 'avaliacoes'
  });
  return Avaliacao;
};
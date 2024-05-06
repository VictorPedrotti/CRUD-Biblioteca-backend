'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      data_publicacao: {
        type: Sequelize.DATEONLY
      },
      preco: {
        type: Sequelize.DECIMAL
      },
      numero_paginas: {
        type: Sequelize.INTEGER
      },
      genero_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'generos', key: 'id' }
      },
      editora_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'editoras', key: 'id' }
      },
      autor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'autores', key: 'id' }
      },
      fornecedor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'fornecedores', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('livros');
  }
};
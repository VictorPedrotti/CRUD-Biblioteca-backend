'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('itens_pedidos', [
      {
        quantidade: 2,
        preco_unitario: 39.90,
        subtotal: 79.80,
        pedido_id: 1,
        livro_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantidade: 1,
        preco_unitario: 39.90,
        subtotal: 39.90,
        pedido_id: 1,
        livro_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantidade: 1,
        preco_unitario: 34.90,
        subtotal: 34.90,
        pedido_id: 2,
        livro_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('itens_pedidos', null, {});
  }
};

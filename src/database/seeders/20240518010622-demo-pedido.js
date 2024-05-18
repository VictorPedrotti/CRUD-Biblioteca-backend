'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pedidos', [
      {
        data_pedido: '05-01-2024',
        total: 34.90,
        cliente_id: 1,
        forma_pagamento_id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        data_pedido: '22-03-2024',
        total: 119.70,
        cliente_id: 2,
        forma_pagamento_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};

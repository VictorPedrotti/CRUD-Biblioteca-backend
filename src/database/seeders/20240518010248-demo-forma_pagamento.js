'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('formas_pagamento', [
      {
        descricao: 'Pix',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Cartão de crédito',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Boleto bancário',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Cartão de débito',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('formas_pagamento', null, {});
  }
};

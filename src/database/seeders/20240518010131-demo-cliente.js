'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        nome: 'Victor Pedrotti',
        cpf: '67543219098',
        email: 'email@email.com',
        telefone: '45 98877-5566',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Joana Silva',
        cpf: '12345678910',
        email: 'joana.silva@email.com',
        telefone: '45 98765-4321',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'José da Silva',
        cpf: '98765432100',
        email: 'jose.silva@email.com',
        telefone: '45 98745-4321',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};

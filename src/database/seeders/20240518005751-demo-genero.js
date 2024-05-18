'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('generos', [
      {
        descricao: 'Terror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Fantasia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao: 'Suspense',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('generos', null, {});
  }
};

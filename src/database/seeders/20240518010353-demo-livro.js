'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('livros', [
      {
        titulo: 'Dom Casmurro',
        data_publicacao: '01-01-1899',
        preco: 39.90,
        numero_paginas: 256,
        genero_id: 2,
        editora_id: 1,
        autor_id: 2,
        fornecedor_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Memórias Póstumas de Brás Cubas',
        data_publicacao: '01-01-1881',
        preco: 34.90,
        numero_paginas: 208,
        genero_id: 2,
        editora_id: 5,
        autor_id: 2,
        fornecedor_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Quincas Borba',
        data_publicacao: '01-01-1891',
        preco: 29.90,
        numero_paginas: 192,
        genero_id: 2,
        editora_id: 3,
        autor_id: 2,
        fornecedor_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Guerra e Paz',
        data_publicacao: '01-01-1869',
        preco: 39.90,
        numero_paginas: 1225,
        genero_id: 2, 
        editora_id: 6,
        autor_id: 4, 
        fornecedor_id: 4, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Romeu e Julieta',
        data_publicacao: '01-01-1597',
        preco: 19.90,
        numero_paginas: 320,
        genero_id: 4, 
        editora_id: 7, 
        autor_id: 1, 
        fornecedor_id: 5, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Hamlet',
        data_publicacao: '01-01-1603',
        preco: 24.90,
        numero_paginas: 400,
        genero_id: 4, 
        editora_id: 7, 
        autor_id: 1, 
        fornecedor_id: 5, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Harry Potter e a Pedra Filosofal',
        data_publicacao: '26-06-1997',
        preco: 34.90,
        numero_paginas: 256,
        genero_id: 3, 
        editora_id: 1, 
        autor_id: 5,
        fornecedor_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      }  
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  }
};

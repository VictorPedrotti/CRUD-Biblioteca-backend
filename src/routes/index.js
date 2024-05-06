const express = require('express');
const autores = require('./autoresRoute.js');
const avaliacoes = require('./avaliacoesRoute.js');
const clientes = require('./clientesRoute.js');
const editoras = require('./editorasRoute.js');
const formasPagamento = require('./formasPagamentoRoute.js');
const fornecedores = require('./fornecedoresRoute.js');
const generos = require('./generosRoute.js');
const itensPedidos = require('./itensPedidosRoute.js');
const livros = require('./livrosRoute.js');
const pedidos = require('./pedidosRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    autores,
    avaliacoes,
    clientes,
    editoras,
    formasPagamento,
    fornecedores,
    generos,
    itensPedidos,
    livros,
    pedidos
  );
};
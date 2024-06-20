const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController.js');

const clienteController = new ClienteController();

const router = Router();

router.get('/clientes', (req, res) => clienteController.pegaTodos(req, res));
router.get('/clientes/:id', (req, res) => clienteController.pegaUmPorId(req, res));
router.post('/clientes', (req, res) => clienteController.criaNovo(req, res));
router.put('/clientes/:id', (req, res) => clienteController.atualiza(req, res));
router.delete('/clientes/:id', (req, res) => clienteController.exclui(req, res));
router.get('/clientes/:id/avaliacoes', (req, res) => clienteController.buscaAvaliacoesPorColaborador(req, res));
router.get('/clientes/:id/pedidos', (req, res) => clienteController.buscaPedidosPorColaborador(req, res));

module.exports = router;
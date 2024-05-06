const { Router } = require('express');
const ItensPedidoController = require('../controllers/ItensPedidoController.js');

const itensPedidoController = new ItensPedidoController();

const router = Router();

router.get('/itensPedidos', (req, res) => itensPedidoController.pegaTodos(req, res));
router.get('/itensPedidos/:id', (req, res) => itensPedidoController.pegaUmPorId(req, res));
router.post('/itensPedidos', (req, res) => itensPedidoController.criaNovo(req, res));
router.put('/itensPedidos/:id', (req, res) => itensPedidoController.atualiza(req, res));
router.delete('/itensPedidos/:id', (req, res) => itensPedidoController.exclui(req, res));

module.exports = router;
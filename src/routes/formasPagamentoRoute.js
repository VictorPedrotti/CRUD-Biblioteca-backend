const { Router } = require('express');
const FormaPagamentoController = require('../controllers/FormaPagamentoController.js');

const formaPagamentoController = new FormaPagamentoController();

const router = Router();

router.get('/formasPagamento', (req, res) => formaPagamentoController.pegaTodos(req, res));
router.get('/formasPagamento/:id', (req, res) => formaPagamentoController.pegaUmPorId(req, res));
router.post('/formasPagamento', (req, res) => formaPagamentoController.criaNovo(req, res));
router.put('/formasPagamento/:id', (req, res) => formaPagamentoController.atualiza(req, res));
router.delete('/formasPagamento/:id', (req, res) => formaPagamentoController.exclui(req, res));

module.exports = router;
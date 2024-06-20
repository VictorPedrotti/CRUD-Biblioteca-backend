const { Router } = require('express');
const FornecedorController = require('../controllers/FornecedorController.js');

const fornecedorController = new FornecedorController();

const router = Router();

router.get('/fornecedores', (req, res) => fornecedorController.pegaTodos(req, res));
router.get('/fornecedores/:id', (req, res) => fornecedorController.pegaUmPorId(req, res));
router.post('/fornecedores', (req, res) => fornecedorController.criaNovo(req, res));
router.put('/fornecedores/:id', (req, res) => fornecedorController.atualiza(req, res));
router.delete('/fornecedores/:id', (req, res) => fornecedorController.exclui(req, res));
router.get('/fornecedores/:id/livros', (req, res) => fornecedorController.buscaLivrosPorFornecedorId(req, res));

module.exports = router;
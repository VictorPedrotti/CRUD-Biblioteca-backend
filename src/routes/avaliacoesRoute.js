const { Router } = require('express');
const AvaliacaoController = require('../controllers/AvaliacaoController.js');

const avaliacaoController = new AvaliacaoController();

const router = Router();

router.get('/avaliacoes', (req, res) => avaliacaoController.pegaTodos(req, res));
router.get('/avaliacoes/:id', (req, res) => avaliacaoController.pegaUmPorId(req, res));
router.post('/avaliacoes', (req, res) => avaliacaoController.criaNovo(req, res));
router.put('/avaliacoes/:id', (req, res) => avaliacaoController.atualiza(req, res));
router.delete('/avaliacoes/:id', (req, res) => avaliacaoController.exclui(req, res));

module.exports = router;
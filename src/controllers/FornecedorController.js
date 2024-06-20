const Controller = require('./Controller.js');
const FornecedorServices = require('../services/FornecedorServices.js'); 

const fornecedorServices = new FornecedorServices();

class FornecedorController extends Controller {
  constructor() {
    super(fornecedorServices);
  }

  async buscaLivrosPorFornecedorId(req, res){
    try {
      const { id } = req.params;
      const listaLivros = await fornecedorServices.buscaLivrosFornecedor(Number(id));
      return res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = FornecedorController;
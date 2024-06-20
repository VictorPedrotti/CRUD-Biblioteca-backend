const Controller = require('./Controller.js');
const AutorServices = require('../services/AutorServices.js'); 

const autorServices = new AutorServices();

class AutorController extends Controller {
  constructor() {
    super(autorServices);
  }

  async buscaLivrosPorAutorId(req, res){
    try {
      const { id } = req.params;
      const listaLivros = await autorServices.buscaLivrosAutor(Number(id));
      return res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = AutorController;
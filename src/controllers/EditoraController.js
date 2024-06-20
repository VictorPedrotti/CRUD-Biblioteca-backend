const Controller = require('./Controller.js');
const EditoraServices = require('../services/EditoraServices.js'); 

const editoraServices = new EditoraServices();

class EditoraController extends Controller {
  constructor() {
    super(editoraServices);
  }

  async buscaLivrosPorEditoraId(req, res){
    try {
      const { id } = req.params;
      const listaLivros = await editoraServices.buscaLivrosEditora(Number(id));
      return res.status(200).json(listaLivros);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = EditoraController;
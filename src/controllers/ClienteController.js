const Controller = require('./Controller.js');
const ClienteServices = require('../services/ClienteServices.js'); 

const clienteServices = new ClienteServices();

class ClienteController extends Controller {
  constructor() {
    super(clienteServices);
  }

  async buscaAvaliacoesPorColaborador(req, res) {
    try {
      const { id } = req.params;
      const listaAvaliacoes = await clienteServices.buscaAvaliacaoColaborador(Number(id));
      return res.status(200).json(listaAvaliacoes);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }

  async buscaPedidosPorColaborador(req, res) {
    try {
      const { id } = req.params;
      const listaPedidos = await clienteServices.buscaPedidosColaborador(Number(id));
      return res.status(200).json(listaPedidos);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = ClienteController;
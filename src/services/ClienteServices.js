const Services = require('./Services.js');

class ClienteServices extends Services {
  constructor(){
    super('Cliente');
  }

  async buscaAvaliacaoColaborador(id) {
    const avaliacao = await super.pegaUmRegistroPorId(id);
    const listaAvaliacoes = await avaliacao.getAvaliacoesCliente();
    return listaAvaliacoes;
  }

  async buscaPedidosColaborador(id) {
    const pedido = await super.pegaUmRegistroPorId(id);
    const listaPedidos = await pedido.getPedidosCliente();
    return listaPedidos;
  }
}

module.exports = ClienteServices;
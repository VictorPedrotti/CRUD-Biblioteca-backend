const Services = require('./Services.js');

class PedidoServices extends Services {
  constructor(){
    super('Pedido');
  }

  async buscaItensPorPedidoId(id){
    const itensPedido = await super.pegaUmRegistroPorId(id);
    const listaItensPedido = await itensPedido.getTodosItensPedido();
    return listaItensPedido;
  }
}

module.exports = PedidoServices;
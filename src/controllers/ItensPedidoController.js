const Controller = require('./Controller.js');
const ItensPedidoServices = require('../services/ItensPedidoServices.js'); 

const itensPedidoServices = new ItensPedidoServices();

class ItensPedidoController extends Controller {
  constructor() {
    super(itensPedidoServices);
  }
}

module.exports = ItensPedidoController;
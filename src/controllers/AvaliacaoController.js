const Controller = require('./Controller.js');
const AvaliacaoServices = require('../services/AvaliacaoServices.js'); 

const avaliacaoServices = new AvaliacaoServices();

class AvaliacaoController extends Controller {
  constructor() {
    super(avaliacaoServices);
  }
}

module.exports = AvaliacaoController;
const Controller = require('./Controller.js');
const GeneroServices = require('../services/GeneroServices.js'); 

const generoServices = new GeneroServices();

class GeneroController extends Controller {
  constructor() {
    super(generoServices);
  }
}

module.exports = GeneroController;
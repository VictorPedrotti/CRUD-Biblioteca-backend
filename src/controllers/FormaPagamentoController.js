const Controller = require('./Controller.js');
const FormaPagamentoServices = require('../services/FormaPagamentoServices.js'); 

const formaPagamentoServices = new FormaPagamentoServices();

class FormaPagamentoController extends Controller {
  constructor() {
    super(formaPagamentoServices);
  }
}

module.exports = FormaPagamentoController;
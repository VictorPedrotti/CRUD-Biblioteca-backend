const Services = require('./Services.js');

class FornecedorServices extends Services {
  constructor(){
    super('Fornecedor');
  }

  async buscaLivrosFornecedor(id) {
    const livro = await super.pegaUmRegistroPorId(id);
    const listaLivros = await livro.getLivrosFornecedor();
    return listaLivros;
  }
}

module.exports = FornecedorServices;
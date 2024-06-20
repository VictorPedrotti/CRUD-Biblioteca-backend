const Services = require('./Services.js');

class EditoraServices extends Services {
  constructor(){
    super('Editora');
  }

  async buscaLivrosEditora(id) {
    const livro = await super.pegaUmRegistroPorId(id);
    const listaLivros = await livro.getLivrosEditora();
    return listaLivros;
  }
}

module.exports = EditoraServices;
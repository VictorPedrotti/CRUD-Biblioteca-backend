const Services = require('./Services.js');

class AutorServices extends Services {
  constructor(){
    super('Autor');
  }

  async buscaLivrosAutor(id) {
    const livro = await super.pegaUmRegistroPorId(id);
    const listaLivros = await livro.getLivrosAutor();
    return listaLivros;
  }
}

module.exports = AutorServices;
function pesquisar() {

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById ("resultados-pesquisa")

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Não temos esse Livro</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados formatados
let resultados = "";
let titulo = "";
let descrição ="";
let genero = "";
let tags = "";
 // Itera sobre cada dado na lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descrição = dado.titulo.toLowerCase()
    genero = dado.genero.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    //então, faça
    if (titulo.includes(campoPesquisa) || descrição.includes (campoPesquisa) || genero.includes (campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói o HTML para cada item do resultado
    resultados += `
    <div class= "item-resultado">
                   <h2> ${dado.titulo} </h2>
              <p class= "descricao-meta">${dado.descrição}</p>
              <a href= ${dado.link} target=" _blank"> Link para Compra </a>
              </div>
              `
        }
   
}

if (!resultados) {
    resultados = "<p> Não encontrado, você não digitou o nome de um livro.</p>"
}

// Atribui o HTML gerado para a seção de resultados
section.innerHTML = resultados
}

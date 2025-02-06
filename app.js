'use strict'
const diciplinas = [
    {nome: 'PPDM', incon: 'img4.png', cor: 'blue'},
    {nome: 'PRO', incon: 'img1.png', cor: 'tomato'},
    {nome: 'PWBE', icon: 'img3.png', cor: 'pink'},
    {nome: 'PWFE', icon: 'img2.png', cor:'plum'}
]
function criarMenu(diciplina){
    const novoItem = document.createElement('li') //criando um elemento
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu') //pegar um elemento que ja existe atraves de seu id



    //colocando as propriedades do img
    novaImagem.src = `./img/${diciplina.icon}`
    novoSpan.textContent = diciplina.nome //textcontent para colocar algo dentro da tag
    novoItem.style = `--cor-hover: ${diciplina.cor}`


    novoItem.appendChild(novaImagem) //adiciona um filho
    novoItem.appendChild(novoSpan)
    lista.appendChild(novoItem)
    
}

diciplinas.forEach(criarMenu)

//criação dos card

const produtos =[
    {nome: 'Curso PPDM', descricao: 'Crie aplicativos móveis nativos e híbridos para iOS e Android.', imagem:'mobileimg.jfif', cor:'#FCFCFC', duracao: '3M'},
    {nome: 'Curso PRO', imagem: 'projetosimg.jfif', cor:'#FCFCFC', duracao: '5M'},
    {nome: 'Curso PWBE', descricao: 'Aprenda a desenvolver a lógica e os servidores de aplicativos, trabalhando com APIs e bancos de dados', imagem:'backimg.jfif', cor:'#FCFCFC', duracao: '8M'},
    {nome: 'Curso PWFE', descricao:'Aprenda a gerenciar projetos de software com metodologias ágeis, com entregas de qualidade.', descricao:'Desenvolva interfaces interativas e responsivas usando HTML, CSS, JavaScript e frameworks modernos.', imagem:'frontimg.jfif', cor:'#FCFCFC', duracao: '6M'}
]

function criarCard (produto){
    //criando todos os elementos do card
    const novoCard = document.createElement('div')
    const novaImagem = document.createElement('img')
    const novoTitulo = document.createElement('h2')
    const novaDescricao = document.createElement('p')
    const novoContainerDuracao = document.createElement('div')
    const novaDuracao = document.createElement('span')
    const novoBotao = document.createElement('button')
    const ContainerGeral = document.getElementById('containerCards') //pegando a div criada no html, para depois colocarmos tudo dentro dela

    


    //teste:
    // const teste = document.createElement('span')
    // const card = document.getElementById('containerCards')

    // card.appendChild(teste)

    // teste.textContent = produto.nome
}

produtos.forEach(criarCard)
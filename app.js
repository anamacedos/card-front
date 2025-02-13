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
    {nome: 'Curso PPDM', descricao: 'Crie aplicativos móveis nativos e híbridos para iOS e Android.', imagem:'mobileimg.jfif', cor:'#5F2F9D', duracao: '4 MESES', valor:'$400'},
    {nome: 'Curso PRO', descricao:'Aprenda a planejar, desenvolver e gerenciar projetos de TI com metodologias ágeis e boas práticas do mercado. ',imagem: 'projetosimg.jfif', cor:'#D87B68', duracao: '5 MESES', valor: '$600'},
    {nome: 'Curso PWBE', descricao: 'Aprenda a desenvolver a lógica e os servidores de aplicativos, trabalhando com APIs e bancos de dados', imagem:'backimg.jfif', cor:'#273244', duracao: '8 MESES', valor: '$800'},
    {nome: 'Curso PWFE', descricao:'Aprenda a gerenciar projetos de software com metodologias ágeis, com entregas de qualidade.', descricao:'Desenvolva interfaces interativas e responsivas usando HTML, CSS, JavaScript e frameworks modernos.', imagem:'frontimg.jfif', cor:'#028CB1', duracao: '3 MESES', valor:'$350'}
]

function criarCard (produto){
    //criando todos os elementos do card
    const novoCard = document.createElement('div')
    const novoQuadradoColorido = document.createElement('div')
    const novaImagem = document.createElement('img')
    const novoTitulo = document.createElement('h3')
    const novaDescricao = document.createElement('p')
    const novoValor = document.createElement('span')
    //const novoContainerDuracao = document.createElement('div') 
    const novaDuracao = document.createElement('button')
    const novoBotao = document.createElement('button')
    const ContainerGeral = document.getElementById('containerCards') //pegando a div criada no html, para depois colocarmos tudo dentro dela

    //COLOCANDO AS PROPRIEDADES NO CARD (difinição de conteúdo)
    novaDescricao.textContent = produto.descricao
    novoTitulo.textContent = produto.nome
    novaImagem.src = `./img/${produto.imagem}`
    novaDuracao.textContent = produto.duracao
    novoValor.textContent= produto.valor
    novoBotao.textContent = 'ADD TO CART'
    //novoQuadradoColorido.style = produtos.cor

    //adicionando classes em todas as coisas para ser possível estiliza-las no css e nâo aqui no js

    novoCard.classList.add ('card')
    novoQuadradoColorido.classList.add ('quadrado-colorido')
    novaImagem.classList.add('imagem')
    novoTitulo.classList.add ('titulo')
    novaDescricao.classList.add('descricao')
    novoValor.classList.add('valor')
    //novoContainerDuracao.classList.add('container-duracao')
    novaDuracao.classList.add('duracao')
    novoBotao.classList.add('botao')
 

    //colocando as cores variáveis

    novoTitulo.style = `--cor-produto: ${produto.cor}`
    novoQuadradoColorido.style = `--cor-produto: ${produto.cor}`




    //adicionando elemento por elemento (filhos dentro de seus pais, do menor ao maior)
    novoCard.appendChild(novoTitulo)
    novoCard.appendChild(novaDescricao)
    novoCard.appendChild(novaImagem)
    novoCard.appendChild(novoValor)
    novoCard.appendChild(novaDuracao)
    novoCard.appendChild(novoBotao)

    //adicionando o filho card maior, tudo dentro do quadrado colorido, depois dentro da divzona que terão todos os cards

    novoQuadradoColorido.appendChild(novoCard)
    ContainerGeral.appendChild(novoQuadradoColorido)


    //teste:
    // const teste = document.createElement('span')
    // const card = document.getElementById('containerCards')

    // card.appendChild(teste)

    // teste.textContent = produto.nome
}

produtos.forEach(criarCard)
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
    {nome: 'Curso PPDM', imagem:'mobileimg.jfif', cor:'#FCFCFC', duracao: '3M'},
    {nome: 'Curso PRO', imagem: 'projetosimg.jfif', cor:'#FCFCFC', duracao: '5M'},
    {nome: 'Curso PWBE', imagem:'backimg.jfif', cor:'#FCFCFC', duracao: '8M'},
    {nome: 'Curso PWFE', imagem:'frontimg.jfif', cor:'#FCFCFC', duracao: '6M'}
]

function criarCard (produto){
    const teste = document.createElement('span')
    const card = document.getElementById('cardProduto')

    card.appendChild(teste)

    teste.textContent = produto.nome
}

produtos.forEach(criarCard)
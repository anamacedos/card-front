'use strict'
const diciplinas = [
    {nome: 'PPDM', incon: 'img4.png'},
    {nome: 'PRO', incon: 'img1.png'},
    {nome: 'PWBE', icon: 'img3.png'},
    {nome: 'PWFE', icon: 'img2.png'}
]
function criarMenu(diciplina){
    const novoItem = document.createElement('li') //criando um elemento
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu') //pegar um elemento que ja existe atraves de seu id



    //colocando as propriedades do img
    novaImagem.src = `./img/${diciplina.icon}`
    novoSpan.textContent = diciplina.nome //textcontent para colocar algo dentro da tag
    novoItem.appendChild(novaImagem) //adiciona um filho
    novoItem.appendChild(novoSpan)
    lista.appendChild(novoItem)
}

diciplinas.forEach(criarMenu)

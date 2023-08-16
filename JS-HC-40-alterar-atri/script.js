//adicionar atributo

var title = document.querySelector('#title');

title.setAttribute('class','testando-atributo');
console.log(title)

var btn = document.getElementById("btn");

btn.setAttribute('disabled', 'disabled');

var subtitle = document.querySelector('.subtitle');

subtitle.setAttribute('id', 'subtitle-id');
console.log(subtitle);

// remover atributo

var lista = document.querySelector('#lista');

lista.removeAttribute('id');

console.log(lista)
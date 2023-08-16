// criar um elemento

var el= document.createElement('h3');

el.classList = 'testando-classe';

var texto = document.createTextNode('Este é o texto do h3');

el.appendChild(texto)

console.log(el)

//selecionar elemento que quero trocar

var title = document.querySelector('#title'); //document.getElementById

console.log(title)

// selecionar o pai do elemento

var pai = title.parentNode //body = document.querySelector('body');

// trocar elementos

pai.replaceChild(el, title);
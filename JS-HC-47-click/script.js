var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){

    console.log('clicou');

    console.log(this); //Quando tá trabalhando com eventos o this vai virar o próprio elemento

    this.style.color = 'red'

})

//click afetando outros elementos

var title = document.querySelector("#title");

console.log(title);

title.addEventListener("click", function(){
    console.log(this);
    this.style.background = 'blue'
})

//double click

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function(){

    console.log("click duplo!");

})
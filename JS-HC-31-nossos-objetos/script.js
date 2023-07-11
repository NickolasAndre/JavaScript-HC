let pessoa = {

    nome: 'Nickolas',
    idade: 24,
    falar: function(){
        console.log('Olá,tudo bem?');
    },

    somar: function(a,b){
        return  a + b;
    }

};

console.log(pessoa.idade);

pessoa.falar()

var somar = pessoa.somar(2,2);

console.log(somar);
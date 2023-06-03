var numero = "5"; //'5' false

if(numero === 5){
    console.log("O número é 5"); // se for um string, o valor vai ser falso. por causa do tipo de dado
}

if(numero !== 5){// o numero 5 virou uma string '5' e não um number
    console.log("Não é o número 5 do tipo number");
}
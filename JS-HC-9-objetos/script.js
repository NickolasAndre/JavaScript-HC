var obj = {
    nome: 'Nickolas',
    idade: 24,
    profissao: 'programador',
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

console.log(obj.idade);
console.log(obj.nome);
console.log(obj.profissao);

console.log('o meu nome é ' + obj.nome);

obj.nome = 'Pedro';

console.log(obj.nome);

console.log(obj);

obj.graduacao = true;

obj.cor = 'Preto';

console.log(obj);
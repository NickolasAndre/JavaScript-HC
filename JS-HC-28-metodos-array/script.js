//length

var arr = [1,2,3,4,5];

console.log(arr.length)

//push

arr.push(6);

console.log(arr);

//pop

arr.pop();

console.log(arr)

//unshift

arr.unshift('primeiro');

console.log(arr);

//shift

arr.shift();

console.log(arr);

//acessar o último elemento do arry

console.log(arr[arr.length - 1])

//isArray

console.log(Array.isArray(5));
console.log(Array.isArray(arr));
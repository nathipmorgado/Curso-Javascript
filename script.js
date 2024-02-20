// Operadores aritméticos
// + - * / **

let salario = 100;

console.log(salario + salario);

//Opradores de incremento ou decremento
let idade = 25;
console.log(idade++);
console.log(idade); //resultado 25 + 1 = 26

console.log(idade--)
console.log(idade); //resultado 25 - 1 = 24

//Operadores de atribuição
let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer; //valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
console.log(valorTecladoGamer); //resultado 200

let valorMouse = 100;
valorMouse -= valorMouse;
console.log(valorMouse); //resultado 0

//Operadores de igualdade
  //Igualdade estrita
  console.log(1 === 1); //true = comparando valores e tipos 
  console.log ('1' === 1); //false = uma string não é igual um número

  //Igualdade solta
  console.log (1 == 1); //true = copara valores e ignora os tipos
  console.log('1' == 1); //true = ignora os tipos e iguala os valores

//Operador ternário
   //Se o cliente tiver mais que 100 pontos = premium, se menos, comum
   let pontos = 100;
   let tipo = pontos > 100 ? 'premium' : 'comum';
   console.log(tipo); //resultado: comum

      






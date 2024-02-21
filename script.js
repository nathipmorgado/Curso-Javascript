// Operador lógico e (&&)
//Retorna true se os dois operadores forem true

console.log(true && true); //E
console.log(false && true); //E
console.log(false && false); //E
console.log( false || true); //Ou
console.log(true || true); //Ou

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);

let menorDeIdade = false;
let naoPossuiCarteiraDeTrabalho = true;
let podePrestar = menorDeIdade || naoPossuiCarteiraDeTrabalho;
console.log(podePrestar);

//Operador not (!)
let candidatoRecusado = !podeAplicar
console.log(candidatoRecusado);







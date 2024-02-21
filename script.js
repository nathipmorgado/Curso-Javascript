//Falsy = undefinid, null, 0, false, '' , NaN (not a number)
//Truthy - todos os valores diferentes de falsy
// || precisa achar apenas um valor truthy e sempre vai retornar ele.

let corPersonalizada = 'amarelo';
let corPadrao = 'azul';
corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);

//Trocando valor de varivável 
let a = 'vermelho';
let b = 'azul';

let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

//If - Else
 //Se a hora estiver entre 06:00 até 12:00 : Bom dia! - if
 //Se estiver entre 12:00 até 18:00 : Boa tarde! - else if
 //Se não : Boa noite! - else

 let hora = 20;
 if (hora > 6 && hora < 12 ) {
    console.log('Bom dia!')
 }
 else if (hora > 12 && hora < 18 ){
    console.log('Boa tarde!')

 }
 else {
    console.log('Boa noite!')
 }
 //Switch - Case
 let permissao; //comum, gerente, diretor
 permissao = 'gerente';
 switch(permissao){
    case 'comum' : 
    console.log('Usuário comum')
    break;

    case 'gerente' : 
    console.log('Usuário gerente')
    break;

    case 'diretor' : 
    console.log('Usuário diretor')
    break;

    default: 
    console.log('Usuário não reconhecido!')
 }

 //For
for (let i = 5;i >= 1;i--){
    //console.log('Estou aprendendo!', i)
    if(i % 2 !== 0){
        console.log(i);
    }
}









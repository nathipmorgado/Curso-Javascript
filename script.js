//Arrays

let familia = [true, 1, 23,'Nathália', 27 ];
console.log(familia.length);
console.log(familia[3]);

//Funções = verbo + substantivo
let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade;

};

console.log(corSite);
resetaCor("Verde", " claro");
console.log(corSite);

//Diferentes tipos de funções
   // Realizar uma tarefa e não devolver nada
   function dizerNome(){
    console.log('Nathy');
   }

   dizerNome();

   // Realiza uma tarefa e retorna algo
   function multiplicarPorDois(valor){
    return valor * 2;
   }

   console.log(multiplicarPorDois(5));

   let resultado = multiplicarPorDois(5);
   console.log(resultado);

   //ok
   


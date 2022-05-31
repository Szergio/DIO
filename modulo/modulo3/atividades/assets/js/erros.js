let array = [0,1,2];
let numero= 3;

const refer = new Error(`Sem dados!`);
refer.name = 'ReferenceError';

const type = new Error(`Tipo de objeto errado!`);
type.name = 'TypeError'; 

const range = new Error('Tamanho do array errado!');
range.name = 'RnageError';

function teste(array, num){
    if(!array || !num){
        throw refer;
    }

    if(typeof(num) != 'number' || typeof(array) != 'object'){
        throw type;
    }

    if(num > array.length || num < array.length){
        throw range;
    }

    if(array.length == num)
        console.log(array);
}
function verificar(array, num){
    try{
        teste(array,num);
    }
    catch(e){
        console.log(e);
    }
}
verificar(array,numero);
verificar(array,100);
verificar(array,"string");
verificar(array);
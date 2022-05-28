var numeroWrapper = document.getElementById("numero");
var num_anteriorWrapper = document.getElementById("num_anterior");
let numero = 0;
let num = 0;

function resultadoanterior(){
    num_anteriorWrapper.innerHTML = numeroWrapper.innerHTML;
}

//Acrescenta contador.
function soma(){
    resultadoanterior()
    numero = numero + 101;
    numeroWrapper.innerHTML = menorQmaior(numero);
    console.log("(+)Número =",numero);
    cor(numero);
}

//Subtrai contador.
function sub(){
    resultadoanterior()
    numero = numero - 1.1;
    numeroWrapper.innerHTML = menorQmaior(numero);
    console.log("(-)Número =",numero);
    cor(numero);
}

//Zera o contador.
function zero(){
    resultadoanterior()
    numero = 0;
    numeroWrapper.innerHTML = 0;
    console.log("Número redefiniddo para ",numero,".");
    document.getElementById("numero").style.color="black";
}

//Verifica o contador.
function menorQmaior(num){
    let menor,maior=0;
    menor = -6;
    maior = 777;
    if(num < menor){
        num = menor;
        numero = menor;
        return num;
    }
    else if(num > maior){
        num = maior;
        numero = maior;
        return num;
    }
    else{
        return num;
    }
}

//Mudança de cor.
function cor(num){
    if (num > 0 ){
        document.getElementById("numero").style.color="blue";
    }
    else if(num < 0){
        document.getElementById("numero").style.color="red";
    }
    else{
        document.getElementById("numero").style.color="black";
    }
}
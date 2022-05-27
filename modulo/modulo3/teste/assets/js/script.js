var numeroWrapper = document.getElementById("numero");
let numero = 0;
let num = 0;

function soma(){
    numero = numero + 101;
    numeroWrapper.innerHTML = menorQmaior(numero);
    console.log(numero);

    /*
    if(numero <= 777){
        numeroWrapper.innerHTML = numero;
        console.log("Número <= 777, logo número =",numero);
    }
    else{
        numero = 777;
        numeroWrapper.innerHTML = 777;
        console.log("Número > 777.(",numero,")");
    }
    //menorQmaior(numero);
    //numeroWrapper.innerHTML = menorQmaior(numero);*/
}

function sub(){
    numero = numero - 1.1;
    numeroWrapper.innerHTML = menorQmaior(numero);
    console.log(numero);
    
    /*
    //menorQmaior(numero);
    if(numero >-6){
        numeroWrapper.innerHTML = numero;
        console.log("Número atual =",numero);
    }
    else{
        numero = -6
        numeroWrapper.innerHTML = -6;
        console.log("Número =",numero);
    }
    
    numeroWrapper.innerHTML = menorQmaior(numero);
    console.log("Número atual =",numero);*/
}

function zero(){
    numero = 0;
    numeroWrapper.innerHTML = 0;
    console.log("Número redefiniddo para ",numero);
}



function menorQmaior(num){
    if(num < -6){
        num = -6;
        numero = -6;
        return num;
    }
    else if(num > 777){
        num = 777;
        numero = 777;
        return num;
    }
    else{
        return num;
    }
    //return num;
}

function numbers(num1, num2){
    var soma = num1 + num2;
    var igual = "";
    if(num1 == num2){
        igual = `${num1} = ${num2}`;
    }
    else{
        igual = `${num1} != ${num2}`;
    }

    var a = soma10(soma);
    var b = soma20(soma);
    result(igual,soma,a,b);
}

function soma10(soma){
    if(soma > 10){
        return "SOMA > 10";
    }
    else{
        return "SOMA < 10";
    }
}
function soma20(soma){
    if(soma > 20){
        return "SOMA > 20";
    }
    else{
        return "SOMA < 20";
    }
}

function result(igual,soma,s10,s20){
    console.log(`
        ${igual} \n
        SOMA = ${soma}\n
        ${s10} \n
        ${s20} \n
        `);

}
numbers(10.1,10.1);
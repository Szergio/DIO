var result = 0;
var number1= 0;
var number2= 0;

function calculadora(){
    number1 = Number(prompt("Primeiro Número:"));
    number2 = Number(prompt("Segundo Número: "));
    escolha();
    loop();

}

function loop(){
    alert
    (
    "1 -> CONTINUAR "  +"\n"+
    "2 -> SAIR"        +"\n"
    );
    var optionsair = Number(prompt("Escolha sua opção: "));
    if(!optionsair || optionsair > 2){
        alert("Erro -> opção errada!");
        loop();
    }
    else{
        switch(optionsair){
            case 1:
                calculadora();
                case 2:
                    break;
        }
    }
}

function escolha(){
    alert
    (
    "1 -> SOMA "         +"\n"+
    "2 -> SUBTRAÇÃO"     +"\n"+
    "3 -> MULTIPLICAÇÃO" +"\n"+
    "4 -> DIVISÃO"       +"\n"+
    "5 -> DIVISÃO REAL"  +"\n"+
    "6 -> POTENCIAÇÃO"   +"\n"+
    "7 -> SAIR?"
    );
    var option = Number(prompt("Escolha sua opção: "));
    if(!option || option >= 8){
        alert("Erro -> opção errada!");
        escolha();
    }
    else{
        switch(option){
            case 1:
                soma();
                break;
                case 2:
                    sub();
                    break;
                    case 3:
                        multi();
                        break;
                        case 4:
                            div();
                            break;
                            case 5:
                                divReal();
                                break;
                                case 6:
                                    pot();
                                    break;
                                    case 7:
                                        break;   
        }
    }
}
function resultAnterior(){}

function soma(){
    result = number1 + number2;
    alert(`SOMA ${number1} + ${number2} = ${result}.`);
}
function sub(){
    result = number1 - number2;
    alert(`SUBTRAÇÃO ${number1} - ${number2} = ${result}.`);
}
function multi(){
    result = number1 * number2;
    alert(`MULTIPLICAÇÃO ${number1} * ${number2} = ${result}.`);
}
function div(){
    result = number1 / number2;
    alert(`DIVISÃO ${number1} / ${number2} = ${result}.`);
}
function divReal(){
    result = number1 % number2;
    alert(`DIVISÃO REAL ${number1} % ${number2} = ${result}.`);
}
function pot(){
    result = number1 ** number2;
    alert(`POTENCIAÇÃO ${number1} ** ${number2} = ${result}.`);
}


const list = [];

function lertexto(){
    let valor = document.getElementById("texto").value;
    
    if(valor == ""){
        console.log("null");
    }
    else{
        list.push(valor);
        criar(valor);

        console.log("lista =",list);
        console.log("O texto registrado =",valor);

        clear();
    }
    
}

function criar(texto){
    
    var t = document.createTextNode(texto);

    var li = document.createElement("LI");

    li.appendChild(t);
    var teste = document.getElementById("myList").innerHTML;
    teste += "<input type=checkbox id="+texto+">"+texto+"<br>";

    //document.body.appendChild(li);
    document.getElementById("myList").innerHTML = teste;
    
}
function r(){
    var del = document.getElementById("ads").id;
    document.getElementById("ads").remove();
    console.log("sim");



}

function clear(){
    document.getElementById("texto").value = "";
}
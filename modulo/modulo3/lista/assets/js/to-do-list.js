let listaCheckbox = [];

function readText(){
    let texto = document.getElementById("texto").value;

    if(texto == "" || verificar(texto) == true){
        console.log("verificado");
    }
    else{
        listaCheckbox.push(texto);
        createCheckbox(texto);
    }
    clear();
}

function verificar(texto){
    for(var i = 0 ; i<listaCheckbox.length; i++){
        if(listaCheckbox[i] == texto){
            console.log("Já tem");
            return true;
        }
    }
    return false;
}

function createCheckbox(texto){
    let createBox = document.getElementById("listCheckbox").innerHTML;
    createBox += 
    "<tr>"+
    "<th>"+
    "<input type=checkbox"+" id="+""+texto+""+" onclick="+"boxCheked()"+">"
    +"</th>"+

    "<th>"+
    "<p id="+texto+"1"+">"+texto+"</p>"
    +"</th>"
    +"</tr>";
    
    document.getElementById("listCheckbox").innerHTML = createBox;
}

function boxCheked(){
    for(var i = 0 ; i<listaCheckbox.length; i++){
        var element = document.getElementById(listaCheckbox[i]);
        var element1 = document.getElementById(listaCheckbox[i]+"1");
        if( element.checked == true){
            element1.style.textDecorationLine = "line-through";
        }
        else{
            element1.style.textDecorationLine = "none";
        }
    }
}

function deleteCheckbox(){
    console.log(listaCheckbox.length);
    console.log(listaCheckbox);

    let element  = document.getElementById(listaCheckbox[0]);
    var lenghtlist = listaCheckbox.length;

    for(var i = 0 ; i <= lenghtlist ; i++){
        if(document.getElementById(listaCheckbox[i]) == null){
            break;
        }
        element = document.getElementById(listaCheckbox[i]);
        if(element.checked == true){
            console.log("Saiu:"+element);
            document.getElementById(listaCheckbox[i]).remove();
            document.getElementById(listaCheckbox[i]+"1").remove();
            listaCheckbox.splice(i, 1);
            document.getElementById("listCheckbox").deleteRow(i+1);
            i=-1;
        }
    }
}

function clear(){
    document.getElementById("texto").value = "";
}



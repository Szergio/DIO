function palidromo(texto){
    let textoConfere = "";
    let textoOrigin  = "";
    let letraigual = 0;
    for(let i = 0; i < texto.length ; i++){
        if( texto[i] == " " || texto[i] == "," || texto[i] =="?" ||texto[i] == "!"){
            textoOrigin = textoOrigin.concat("");
        }
        else{
            textoOrigin = textoOrigin.concat(texto[i]);
        }
    }
    for(let i = texto.length-1; i >= 0 ; i--){
        if( texto[i] == " " || texto[i] =="," || texto[i] =="?" ||texto[i] == "!"){
            textoConfere = textoConfere.concat("");
        }
        else{
            textoConfere = textoConfere.concat(texto[i]);
        }
    }
  
    for(let i = 0; i < textoOrigin.length ; i++){
        if(textoOrigin[i] != textoConfere[i]){
            //console.log(`${textoOrigin[i]} != ${textoConfere[i]}`);
            letraigual ++;
            
        }
    }
    if(letraigual == 0 ){
        console.log(`(${texto}) é palidromo!`);
    }
    else{
        console.log(`(${texto}) não é palidromo!`);
    }
    /*
    console.log(texto);
    console.log(textoConfere);
    console.log(textoOrigin);
    */
}
(
    function(palavra){
        let numDif = 0;
        let j = palavra.length-1;
        for(let i=0; i<palavra.length; i++){
            if(palavra[i] != palavra[j]){
                numDif ++;
            }
            j--;
        }
        if(numDif == 0 ){
            console.log(`(${palavra}) é palidromo!`);
        }
        else{
            console.log(`(${palavra}) não é palidromo!`);
        }
    }
)("ossso");

let impar = function (){}

palidromo("o s");


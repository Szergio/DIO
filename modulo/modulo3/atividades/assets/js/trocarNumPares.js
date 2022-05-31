let lista  = [0,1,2,3,4,5,6,7,8,9,10];
let lista0 ;
(
    function(lista){
        if (lista == 0 || lista == null || lista == undefined || !lista){
            console.log("-1");
        }
        else{
            let listaPar = [];
            let listaImpar = [];

            for(let i=0; i<lista.length; i++){
                if(lista[i] % 2 == 0){
                    listaPar.push(lista[i]);
                }
                else{
                    listaImpar.push(lista[i]);
                }
            }
            console.log(`[${listaImpar}]`);
        }
    }
)(lista);


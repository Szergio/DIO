//import React from 'react';
import Tabela from './array';
import TesteI from './TesteI';
import Soma from './Calculadora';
import readFile from './Comp';


const RenderTabela = () => {
    return(
        <>  
            <input onClick={readFile} type="file"></input>
            {TesteI(Tabela)}
            {Soma(1,234897)}
            {readFile}
        </>
        
    )
}
export default RenderTabela;
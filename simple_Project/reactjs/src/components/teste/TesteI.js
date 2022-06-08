import React from 'react';
import LI from './LI';
const TesteI = (qualTabela) => {
    
    return(
        <ul>
            {qualTabela.map(LI)}
        </ul>
    )
}

export default TesteI;
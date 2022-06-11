import React from 'react';
function lista(props){
    return(
        <>
            {props.map(iten => (
                <>{iten}</>
            ))
            }
        </>
    )
}

export default List;
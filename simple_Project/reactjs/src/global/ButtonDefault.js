import React from 'react';

function ButtonDefault(props) {
    const { name, onClick} = props;
    //const name = props;
    return(
        <button onClick={onClick}>{name}</button>
    )
}
export default ButtonDefault;
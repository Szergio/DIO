import React from "react"

const LI = (nameofindex,index) => {
    return(
        <li>
            <button type="button" id={index.id}>{nameofindex.name}</button>   
        </li>
    )
}
export default LI;
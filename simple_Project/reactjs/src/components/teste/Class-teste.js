import React, {Component} from "react";

class Class extends Component{
    constructor(props){
        super(props)
        this.state = {
            nome: "Sergio",
            age : 18
        }
    }

    render(){
        const {nome, age} = this.state
        return (
            <>
            <h1>{nome}</h1>
            <h1>{age}</h1>
            </>
        )
    }
}

export default Class;
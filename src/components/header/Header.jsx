import React from "react";
import'./Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    state = { }
    render(){
        return(
            <div className="Header">
                <h1 className="titleheade">Emissor de Recibo</h1>
            </div>
        )
    }

}

export default Header;
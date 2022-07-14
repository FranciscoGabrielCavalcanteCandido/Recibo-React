import React from "react";
import './Footer.css';

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="Footer">
                <h1 className="Autor">Autor: Francisco Gabriel Cavalcante Candido</h1>
            </div>
        )
    }
}

export default Footer;
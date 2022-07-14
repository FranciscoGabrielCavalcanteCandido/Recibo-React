import React from "react";
import './Body.css';


class Body extends React.Component{
    constructor(props){
        super(props)
        this.state = { Valor: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let resultado = parseFloat(this.state.Valor);
    }

    limpar(event) {
        this.setState({ Valor: '' });
    }

    render(){
        return(
            <div className="Body">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Valor<br />
                        <input name="Valor" onChange={this.handleChange} type="text" value={this.state.Valor} />
                    </label>
                </form>
            </div>
        );
    }
}

export default Body;
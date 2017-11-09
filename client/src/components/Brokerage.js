import React, {Component} from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import './Brokerage.css'

class Brokerage extends Component {
    state = {
        action: true
    }

    // TextField setters
    _setStock = (value) => {
        value = value.toUpperCase();
        this.setState({stock: value});
    }

    _setAction = (value) => {
        this.setState({action: value});
    }

    _setTotal = (value) => {
        this.setState({total: value});
    }

    _setPrice = (value) => {
        this.setState({price: value});
    }

    _setTax = (value) => {
        this.setState({tax: value});
    }

    // Handles save button action calling parent handler
    _save = () => {
        this.props.save(this.state);
    }

    render() {
        return(
            <div class="broker-main">
                <div>
                    <h1>{ this.props.from }</h1>
                </div>
                <div>
                    <Toggle checked={ this.state.action } onChanged={ this._setAction } onText="Compra" offText="Venda" />
                    <TextField label="Ativo" value={ this.state.stock } onChanged={ this._setStock }/>
                    <TextField label="Quantidade" type="number" value={ this.state.total } onChanged={ this._setTotal } />
                    <TextField label="Valor" type="number" addonString="R$" value={ this.state.price } onChanged={ this._setPrice }/>
                    <TextField  label="Taxas/Emolumentos"type="number" addonString="R$" value={ this.state.tax } onChanged={ this._setTax }/>
                    <div>
                        <br />
                        <DefaultButton primary="true" onClick={ this._save }>Salvar corretagem</DefaultButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default Brokerage;

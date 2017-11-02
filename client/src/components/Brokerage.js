import React, {Component} from 'react';
import { TextField, NumberTextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

class Brokerage extends Component {
    render() {
        return(
            <div>
                <TextField label="Ativo" />
                <TextField label="Quantidade" />
                <TextField label="Valor" addonString="R$"/>
                <TextField label="Taxas/Emolumentos" addonString="R$"/>
                <div>
                    <DefaultButton primary="true">Salvar corretagem</DefaultButton>
                </div>
            </div>
        )
    }
}

export default Brokerage;

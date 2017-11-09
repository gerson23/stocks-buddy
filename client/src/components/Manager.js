import React, {Component} from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import Brokerage from './Brokerage';
import StockTable from './StockTable';

export default class Manager extends Component {
    state = {
        showModal: false,
        stockData: []
    }
    render() {
        let { stockData } = this.state;

        return(
            <div>
                <CommandBar items={[
                    {name: 'Adicionar movimentação', key: 'add', checked: "false", icon: 'Add', onClick: this._openModal},
                    {name: 'Editar', key: 'edit', checked: "false", icon: 'Edit', onClick: () => {}},
                    {name: 'Apagar', key: 'delete', checked: "false", icon: 'Delete', onClick: () => {}}
                ]}/>
                <StockTable data={ stockData }/>
                <Modal isOpen={ this.state.showModal } isBlocking={ false } onDismiss={ this._closeModal }>
                    <div>
                        <Brokerage from="Adicionar nova operação" save={ this.getData }/>
                    </div>
                </Modal>
            </div>
        )
    }

    getData = (data) => {
        console.log(data);
        let newData = this.state.stockData;
        newData.push(data);
        this.setState({stockData: newData});
        this._closeModal();
    }

    _openModal = () => {
        this.setState({showModal: true});
    }

    _closeModal = () => {
        this.setState({showModal: false});
    }
}

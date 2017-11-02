import React, { Component } from 'react';
import logo from './logo.svg';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './App.css';
import Brokerage from './components/Brokerage';

class App extends Component {
    state = {section: 0}

    componentDidMount() {
        fetch('/api')
            .then(res => res.json())
            .then(users => this.setState(users));
    }
    renderMain = () => {
        if(this.state.section == 0) {
            return(
                <div>
                    <p> Oiiiiii</p>
                </div>
            )
        }
        else if(this.state.section == 1) {
            return(
                <div>
                    <Brokerage />
                    <DefaultButton>Example</DefaultButton>
                </div>
            )
        }

    }

    render() {
        return (
            <div className="App">
                <div class="ms-Grid">
                    <div class="ms-Grid-row header">
                            <h1>Stocks buddy</h1>
                    </div>
                    <div class="ms-Grid-row">
                        <div class="ms-Grid-col ms-sm2 ms-md2 ms-lg2">
                            <Nav groups={[{
                                links: [
                                    {name: 'Início', key: 'home', onClick: () => {this.setState({section: 0})}, forceAnchor: 'true'},
                                    {name: 'Gerenciar carteira', key: 'manage', onClick: () => {this.setState({section: 1})}},
                                    {name: 'Gerar relatórios', key: 'report'}
                                ]
                            }]} selectedKey="home"/>
                        </div>
                        <div class="ms-Grid-col ms-sm10 ms-md10 ms-lg10">
                            { this.renderMain() }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

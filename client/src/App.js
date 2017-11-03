import React, { Component } from 'react';
// import logo from './logo.svg';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './App.css';
import Brokerage from './components/Brokerage';

class App extends Component {
    state = {section: "home"}

    componentDidMount() {
    }
    renderMain = () => {
        if(this.state.section === "home") {
            return(
                <div>
                    <p> Oiiiiii</p>
                </div>
            )
        }
        else if(this.state.section === "manage") {
            return(
                <div>
                    <Brokerage />
                    <DefaultButton>Example</DefaultButton>
                </div>
            )
        }
        else if(this.state.section === "report") {
            return(
                <div>
                    <h1>Report</h1>
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
                                    {name: 'Início', key: 'home', onClick: () => {this.setState({section: "home"})}, forceAnchor: 'true'},
                                    {name: 'Gerenciar carteira', key: 'manage', onClick: () => {this.setState({section: "manage"})}, forceAnchor: 'true'},
                                    {name: 'Gerar relatórios', key: 'report', onClick: () => {this.setState({section: "report"})}, forceAnchor: 'true'}
                                ]
                            }]} selectedKey={ this.state.section }/>
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

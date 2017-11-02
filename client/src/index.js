import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import registerServiceWorker from './registerServiceWorker';

const Page = () => (<Fabric><App /></Fabric>);

ReactDOM.render(<Page/>, document.getElementById('root'));
registerServiceWorker();

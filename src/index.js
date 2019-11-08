import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Projects } from './Projects';

ReactDOM.render(
<App />,
document.getElementById('root'));

serviceWorker.unregister();

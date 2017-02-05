import React from 'react';
import {Router, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';

ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'));
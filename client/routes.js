import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Plan from './components/Plan';
import Emotion from './components/Emotion';
import Work from './components/Work';
import Health from './components/Health';


export default (
  <Route  component={App}>
    <Route path='/' component={Home} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    <Route path='/plan' component={Plan} />
    <Route path='/emotion' component={Emotion} />
    <Route path='/work' component={Work} />
    <Route path='/health' component={Health} />
  </Route>
);
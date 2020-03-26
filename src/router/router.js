import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import App from '../App.js';
import Profile from '../container/profile.js';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        );
    }
}
export default Router;
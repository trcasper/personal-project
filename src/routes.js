
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing';
import Merch from './components/Merch';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Confirm from './components/Confirm';
import Login from './components/Login';


export default (
    <Switch>
        <Route exact path = '/' component={Landing}/>
        <Route path = '/merch' component={Merch} />
        <Route path = '/cart' component={Cart} />
        <Route path = '/contact' component={Contact} />
        <Route path = '/confirm' component={Confirm} />
        <Route path = '/login' component={Login} />


    </Switch>
)
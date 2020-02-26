import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing';
import Shop from './components/Shop'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/shop' component={Shop} />
    </Switch>
)
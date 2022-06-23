import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import SalesPage from './view/Sales/index';
import HomePage from './view/Home/index';
import LoginPage from './view/Login/index';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route 
                exact
                path = '/'
                component = {HomePage}
                />
                <Route 
                exact
                path = '/promoções'
                component = {SalesPage}
                />
                <Route
                exact
                path = '/login'
                component = {LoginPage}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
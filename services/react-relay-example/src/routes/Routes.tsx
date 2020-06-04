import React, { FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CountriesPage } from '../pages/CountriesPage';
import { CountryPage } from '../pages/CountryPage';

export const Routes: FunctionComponent = () => {
    return (
        <Switch>
            <Route path="/countries/" component={CountriesPage} exact />
            <Route path="/countries/:id" component={CountryPage} exact />
            <Redirect path="/" to="/countries" exact />
            <Route>
                <span>Not found :(</span>
            </Route>
        </Switch>
    );
};

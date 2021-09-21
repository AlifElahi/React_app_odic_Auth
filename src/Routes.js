import React from 'react'
import {Route,Switch} from "react-router-dom";
import { withOidcSecure } from "@axa-fr/react-oidc-context";
import Home from './screens/Home';
import Slackhandel from './screens/Slackhandel';
import Notfound from './screens/Notfound';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/slack/:id" component={withOidcSecure(Slackhandel)} />
            <Route path="/home" component={Home} />
            <Route path="*" component={Notfound} />
        </Switch>
    )
}

export default Routes

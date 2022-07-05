import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PetsContainer from './pets/pet_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <Route path="/pets" component={PetsContainer} />
            <AuthRoute exact path='/login' component={LoginFormContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;
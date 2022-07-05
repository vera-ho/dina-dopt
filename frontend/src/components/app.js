import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import SignupFormContainer from './session/signup_form_container';
import PetsContainer from './pets/pet_container';
import PetsShowContainer from './pets/pet_show_container';

const App = () => (
    <div>
        <NavBarContainer />
        <div className="app-content">
            <Switch>
                <Route exact path="/pets" component={PetsContainer} />
                <Route path="/pets/:pet_id" component={PetsShowContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />
            </Switch>
        </div>
    </div>
);

export default App;
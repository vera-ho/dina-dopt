import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import SignupFormContainer from './session/signup_form_container';
import PetsContainer from './pets/pet_container';
import PetsShowContainer from './pets/pet_show_container';
import SplashPage from './splash/splash_page';

const App = () => (
    <div>
        <NavBarContainer />
        <AuthRoute exact path="/" component={SplashPage} />
        <div className='app-content'>
            <Switch>
                <ProtectedRoute path="/pets/:pet_id" component={PetsShowContainer} />
                <ProtectedRoute path="/pets" component={PetsContainer} />
                <AuthRoute exact path='/signup' component={SignupFormContainer} />
            </Switch>
        </div>

    </div>
);

export default App;
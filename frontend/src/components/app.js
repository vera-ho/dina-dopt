import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';
import SignupFormContainer from './session/signup_form_container';
import PetsContainer from './pets/pet_container';
import PetsShowContainer from './pets/pet_show_container';
import SplashPage from './splash/splash_page';
import AboutUs from './about/about';

const App = () => (
    <div className="app-content">
        <NavBarContainer />
        <AuthRoute exact path="/" component={SplashPage} />
        <Switch>
            <ProtectedRoute path="/pets/:pet_id" component={PetsShowContainer} />
            <ProtectedRoute path="/pets" component={PetsContainer} />
            <AuthRoute exact path='/signup' component={SignupFormContainer} />
            <Route exact path='/about' component={AboutUs} />
        </Switch>
    </div>
);

export default App;
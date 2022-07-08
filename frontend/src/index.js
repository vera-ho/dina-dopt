import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { login, logout } from './actions/session_actions';
import './assets/stylesheets/main.scss';
import { openModal } from './actions/modal_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/';
    }
  } else {
    store = configureStore({});
  }

  ReactDOM.render(<Root store={store} />, root);
  // store.dispatch(login({ email: "demo@demo.com", password: "password" }))
});
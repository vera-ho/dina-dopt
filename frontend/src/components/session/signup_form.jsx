import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';

const SignupForm = (props) => {

  const dispatch = useDispatch();
  
  const [state, setState] = useState({
      email: '',
      name: '',
      password: '',
      password2: '',
      errors: {}
  })

  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch])

  useEffect(() => {
      if (props.signedIn === true) {
          props.history.push('/login')
      }

      setState(prevState => {
          return { ...prevState, errors: props.errors }
      })
  }, [props.signedIn, props.errors, props.history])

  const update = (field) => {
      return e => setState({ ...state, [field]: e.currentTarget.value })
  }

  const nameSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: state.email,
      name: state.name,
      password: state.password,
      password2: state.password2
    };

    props.signup(user);
  }

  const renderErrors = () => {
    return (
        <ul className="error-message-container">
            {Object.keys(state.errors).map((error, i) => (
                <li key={`error-${i}`} className="error-messages">
                    {state.errors[error]}
                </li>
            ))}
        </ul>
    );
  }

    return (
      <div className="signup-page-container">
        <div className="session-form-container">
          <form className="session-form" onSubmit={nameSubmit}>
            <label className="session-label">Email:
              <input type="text"
                value={state.email}
                onChange={update('email')}
              />
            </label>
            <label className="session-label">Name:
              <input type="text"
                value={state.name}
                onChange={update('name')}
              />
            </label>
            <label className="session-label">Password:
              <input type="password"
                value={state.password}
                onChange={update('password')}
              />
            </label>
            <label className="session-label">Confirm Password:
              <input type="password"
                value={state.password2}
                onChange={update('password2')}
              />
            </label>
          <input className="session-submit" type="submit" value="Submit" />
          {renderErrors()}
          </form>
        </div>
      </div>
    );
}

export default SignupForm;
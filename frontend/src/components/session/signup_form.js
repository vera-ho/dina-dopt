import React, { useState, useEffect } from 'react';

const SignupForm = (props) => {
    
    const [state, setState] = useState({
        email: '',
        name: '',
        password: '',
        password2: '',
        errors: {}
    })

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
        <ul>
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
        <div className="signup-form-container">
          <form className="signup-form" onSubmit={nameSubmit}>
            <label className="signup-label">Email:
              <input type="text"
                id="email"
                value={state.email}
                onChange={update('email')}
              />
            </label>
            <label className="signup-label">Name:
              <input type="text"
                id="name"
                value={state.name}
                onChange={update('name')}
              />
            </label>
            <label className="signup-label">Password:
              <input type="password"
                value={state.password}
                onChange={update('password')}
              />
            </label>
            <label className="signup-label">Confirm Password:
              <input type="password"
                id="password2"
                value={state.password2}
                onChange={update('password2')}
              />
            </label>
          <input className="signup-submit" type="submit" value="Submit" />
          {renderErrors()}
          </form>
        </div>
      </div>
    );
}

export default SignupForm;
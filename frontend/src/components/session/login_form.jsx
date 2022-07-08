import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';

const LoginForm = (props) => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: '',
        password: '',
        errors: {}
    });

    useEffect(() => {
        dispatch(clearErrors());
    }, [dispatch])

    useEffect(() => {
        if (props.currentUser === true) {
            props.history.push('/pets')
        }

        setState(prevState => {
            return { ...prevState, errors: props.errors }
        })
    }, [props.currentUser, props.errors, props.history])

    const update = (field) => {
        return e => setState({ ...state, [field]: e.currentTarget.value })
    }

    const handleLogin = (e) => {
        e.preventDefault();

        let user = {
            email: state.email,
            password: state.password
        };

        props.login(user);
    }

    const handleDemoLogin = (e) => {
        e.preventDefault();

        let demoUser = {
            email: "demoUser@demo.com",
            password: "password"
        };

        props.login(demoUser);
    }

    const renderErrors = () => {
        return (
            <ul className="error-message-container">
                {
                    Object.keys(state.errors).map((error, idx) => {
                        return (
                            <li key={`error-${idx}`} className="error-messages">
                                {state.errors[error]}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <div className="session-form-container">
            <form className="session-form">
                <label className="session-label">Email:
                    <input type="text"
                        value={state.email}
                        onChange={update('email')}
                    />
                </label>
                <label className="session-label">Password:
                    <input type="password"
                        value={state.password}
                        onChange={update('password')}
                    />
                </label>
            <button className="session-submit" onClick={handleLogin}>Login</button>
            <button className="session-submit" onClick={handleDemoLogin}>Demo Login</button>
            {renderErrors()}
            </form>
        </div>
    )
}

export default LoginForm;

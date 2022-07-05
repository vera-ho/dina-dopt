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
            props.history.push('/tweets')
        }

        setState(prevState => {
            return { ...prevState, errors: props.errors }
        })
    }, [props.currentUser, props.errors, props.history])

    const update = (field) => {
        return e => setState({ ...state, [field]: e.currentTarget.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = {
            email: state.email,
            password: state.password
        };

        props.login(user);
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
            <form className="session-form" onSubmit={handleSubmit}>
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
            <input className="session-submit" type="submit" value="Login" />
            {renderErrors()}
            </form>
        </div>
    )
}

export default LoginForm;

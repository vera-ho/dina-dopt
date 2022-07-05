import React, { useState, useEffect } from 'react';

const LoginForm = (props) => {

    const [state, setState] = useState({
        email: '',
        password: '',
        errors: {}
    });

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
            <ul>
                {
                    Object.keys(state.errors).map((error, idx) => {
                        return (
                            <li key={`error-${idx}`}>
                                {state.errors[error]}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text"
                        value={state.email}
                        onChange={update('email')}
                        placeholder="Email"
                    />
                    <br/>
                    <input type="password"
                        value={state.password}
                        onChange={update('password')}
                        placeholder="Password"
                    />
                    <br/>
                    <input type="submit" value="Submit" />
                    {renderErrors()}
                </div>
            </form>
        </div>
    )
}

export default LoginForm;

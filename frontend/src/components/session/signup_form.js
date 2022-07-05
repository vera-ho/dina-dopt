
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {

    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

// const SignupForm = props => {
//   const clearedErrors = false;
//   const [errors, setErrors] = useState({});
//   const [email, setEmail] = useState("");
//   const [handle, setHandle] = useState("");
//   const [password, setPassword] = useState("");
//   const [password2, setPassword2] = useState("");
  
//   useEffect( () => {
//     if(props.signedIn === true) {
//       props.history.push('/login');
//     }
//     setErrors(props.errors)
//   }, [props.signedIn]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     let user = {
//       email: email,
//       handle: handle,
//       password: password,
//       password2: password2
//     }

//     props.signup(user, props.history);
//   }

//   const renderErrors = () => {
//     return(
//       <ul>
//       {Object.keys(errors).map((error, i) => (
//         <li key={`error-${i}`}>
//           {errors[error]}
//         </li>
//       ))}
//     </ul>
//     )
//   }

//   return (
//     <div className="signup-form-container">
//     <form onSubmit={handleSubmit}>
//       <div className="signup-form">
//         <br/>
//           <input type="text"
//             value={email}
//             onChange={ e => setEmail(e.target.value) }
//             placeholder="Email"
//           />
//         <br/>
//           <input type="text"
//             value={handle}
//             onChange={ e => setHandle(e.target.value)}
//             placeholder="Handle"
//           />
//         <br/>
//           <input type="password"
//             value={password}
//             onChange={ e => setPassword(e.target.value)}
//             placeholder="Password"
//           />
//         <br/>
//           <input type="password"
//             value={password2}
//             onChange={e => setPassword2(e.target.value)}
//             placeholder="Confirm Password"
//           />
//         <br/>
//         <input type="submit" value="Submit" />
//         {renderErrors()}
//       </div>
//     </form>
//   </div>
//   )
// }



export default withRouter(SignupForm);
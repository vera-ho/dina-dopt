
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/tweets');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  // Render the session errors if there are any
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
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

// const LoginForm = props => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   useEffect( () => {
//     if(props.currentUser === true) {
//       props.history.push('/tweets');
//     }
//     setErrors(props.errors);
//   }, props.currentUser);

//   const handleSubmit = e => {
//     e.preventDefault();
//     let user = {
//       email: email,
//       password: password
//     }
//     props.login(user);
//   }

//   const renderErrors = () => {
//     return (
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
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div>
//               <input type="text"
//                 value={email}
//                 onChange={ e => setEmail(e.target.value) }
//                 placeholder="Email"
//               />
//             <br/>
//               <input type="password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//                 placeholder="Password"
//               />
//             <br/>
//             <input type="submit" value="Submit" />
//             {renderErrors()}
//           </div>
//         </form>
//       </div>
//   )
// }

export default withRouter(LoginForm);
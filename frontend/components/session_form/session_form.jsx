import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    .then(() => this.props.history.push('/fish'))
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>

          <header className="form-header">
            <h1 className="form-header-title">LOGIN</h1>
            <p className="login-form-instructions">Please enter your e-mail and password:</p>
          </header>

          <div className="login-form-item">
            <label className="login-floating-label">Username</label>
            <input 
              className="login-form-input"
              type="text" 
              placeholder="Username" 
              onChange={this.update('username')} 
            />
          </div>
          <div className="login-form-item">
            <label className="login-floating-label">Email</label>
            <input 
              className="login-form-input"
              type="email" 
              placeholder="Email" 
              onChange={this.update('email')} 
            />
          </div>
          <div className="login-form-item">
            <label className="login-floating-label">Password</label>
            <input 
              className="login-form-input"
              type="password" 
              placeholder="Password" 
              onChange={this.update('password')} 
            />
          </div>

          <button className="login-button">Login</button>
        </form>

      </div>
    )
  }
};

export default SessionForm;
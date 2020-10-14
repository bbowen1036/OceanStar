import React from 'react';

class SignupForm extends React.Component {
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
      .then( () => this.props.history.push('/fish'));
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>

          <header className="form-header">
            <h1 className="form-header-title">REGISTER</h1>
            <p className="login-form-instructions">Please fill in the information below:</p>
          </header>
        
          {this.renderErrors()}

          <div className="login-form-item">
            <label className="login-floating-label">Username</label>
              <input 
                className="login-form-input"
                type="text" 
                value={this.state.username} 
                onChange={this.update('username')} 
                placeholder="Username"
              />
          </div>
          <div className="login-form-item">
          <label className="login-floating-label">Email</label>
            <input 
              className="login-form-input"
              type="email" 
              value={this.state.email} 
              onChange={this.update('email')} 
              placeholder="Email"
            />
          </div>
          <div className="login-form-item">
            <label className="login-floating-label">Password</label>
              <input 
                className="login-form-input"
                type="password" 
                value={this.state.password} 
                onChange={this.update('password')} 
                placeholder="Password"
              />
          </div>
          
          <button className="login-button">CREATE MY ACCOUNT</button>
        </form>

      </div>
    )
  }
};

export default SignupForm;
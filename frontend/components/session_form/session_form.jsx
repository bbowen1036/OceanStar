import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }
  
  componentDidMount () {
    this.props.clearErrors()
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

  demoLogin(e) {
    this.setState({
      username: 'Brian',
      email: 'user1@aa.io',
      password: 'password'
    });
    window.setTimeout(() => this.handleSubmit(e), 500);
  }








//   demoLogin(e) {
//     e.preventDefault();
//     // this.props.clearErrors();
//     let login = this.props.loginUser ? this.props.loginUser : this.props.processForm;
//     let that = this;
//     let count = 0;
//     let demo = 'guestUsergonefishin@aol.compassword';
//     if (this.demo) return;
//     this.setState({
//         username: '',
//         email: '',
//         password: ''
//     });

//     this.demo = setInterval(() => {
//         let type = count < 17 ?'email' : 'password';
//         that.setState({ [type]: that.state[type] + demo[count] });
//         count++;
//         if (count === 25) {
//             clearInterval(this.demo)
//             login({
//                 username: 'guestUser',
//                 email: 'gonefishin@aol.com',
//                 password: 'password'
//             })
//         }
//     }, 50)
// }





  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    .then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <div className="login-page-container">
        

        <div className="form-container">
          <form onSubmit={this.handleSubmit}>

            <header className="form-header">
              <h1 className="form-header-title">LOGIN</h1>
              <p id="demo-login" onClick={(e) => this.demoLogin(e)}>Demo Login</p>
              <p className="login-form-instructions">Please enter your e-mail and password:</p>
            </header>

            {this.renderErrors()}

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
            <div className="form-hint">
              <span> Don't have an account? </span>
              <Link to="/signup">Create One</Link>
            </div>

          </form>

        </div>

       </div>
    )
  }
};

export default SessionForm;
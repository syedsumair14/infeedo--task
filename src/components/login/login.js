import React from "react";
import { connect } from "react-redux";
import "../../assets/styles/login.css";

//import Action
import { loginAction } from "../../action";
import { toast } from 'react-toastify'

export class loginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleChange = ({ target }) => {
    this.setState(
      {
        [target.name]: target.value,
        emailError: '',
        passwordError: ''
      }
    );
  };

  runValidations = () => {
    if(this.state.email !== 'dear@infeedo.com' ){
      this.setState({
        emailError: 'Wrong Email'
      })
      return false
    }
    if(this.state.password !== 'letMeIn'){
      this.setState({
        passwordError: 'Wrong Password'
      })
      return false
    }
    return true
  }

  loginAttempt = () => {
    let isValid = this.runValidations()
    if(isValid){
    this.props.loginAction({
      email: this.state.email,
      password: this.state.password
    });
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.loginReducer.isAuth !== prevProps.loginReducer.isAuth) {
      toast.success('Logged in successfully')
      return this.props.history.push("/feed");
    }
  }

  render() {
    return (
        <div className="container">
         <div className="box">
  <h2>Login</h2>
  <form onSubmit={e => e.preventDefault()}>
    <div className="inputBox">
    <span className="errorClass">{this.state.emailError}</span>
      <input onChange={(e) => this.handleChange(e)} placeholder="Email" type="email" name="email"  />
    </div>
    <div className="inputBox">
    <span className="errorClass">{this.state.passwordError}</span>
      <input onChange={(e) => this.handleChange(e)} placeholder="Password" type="password" name="password" />
    </div>
    <div onClick={this.loginAttempt} className="text-center">
      <button type="submit" className="btn btn-outline-success">SIGN IN</button>
      </div>
  </form>
</div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { loginAction }
)(loginPage);

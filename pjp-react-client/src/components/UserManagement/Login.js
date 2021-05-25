import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { login } from "../../actions/securityActions";
import  "../../css2/login.css";
import log  from "../../picture/log.svg"; 
import { Link } from 'react-router-dom';



class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(LoginRequest);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
       
      <div className="login">
        <div className="container-login">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email"  placeholder="Email" 
              className={classnames("form-control-login", {
                "is-invalid": errors.email,
              })}
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              />
               {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password"   placeholder="Password"
              className={classnames("form-control-login", {
                "is-invalid": errors.password
              })}
              name="password"
              id="exampleInputPassword1"
              value={this.state.password}
              onChange={this.onChange}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
            <input type="submit" value="Login" className="btn-login solid"  onClick={this.onSubmit} />
            <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
            </p>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="https://www.facebook.com/" className="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/" className="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.gmail.com/" className="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="https://www.linkedin.com/" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Welcome At Access Job  </h3>
            <p>
             User Account Login 
            </p>
            
          <Link to="/register">  
          <button 
            className="btn-login transparent" 
            id="sign-in-btn">
              
              Sign UP
            </button></Link>
          </div>
          <img src={log} className="image" alt="" />
        </div>
        
        </div>
      </div>
      
   
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
  errors: state.errors,
});

export default connect(mapStateToProps, { login })(Login);

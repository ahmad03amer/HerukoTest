import React, { Component } from "react";
// 3 import the necessary components
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import classnames from "classnames";
import store from "../../store";
import ImageUploader from "./ImageUploader";
import { CountryDropdown } from 'react-country-region-selector';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import "../../css2/register.css"; 
import regitsterlog from "../../picture/register.svg"
import{Link} from "react-router-dom";

class Register extends Component {
  
    //4 make a controll component using constructor
    constructor() {
        super();

        this.state = {
            email: '',
            fullName: '',
            gender: '',
            bod: '',
            country: '',
            city: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            role: '',
            errors: {}
        };

    //7 add the on change to the constructor
    this.onChange = this.onChange.bind(this);
    //13
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }

  //14 to handle errors
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  
    // 12 on submit 
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            email: this.state.email,
            fullName: this.state.fullName,
            gender: this.state.gender,
            bod: this.state.bod,
            country: this.state.country,
            city: this.state.city,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            role: this.state.role
        };

        this.props.createNewUser(newUser, this.props.history);
    }

    //6 on change 
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    selectCountry(val) {
        this.setState({ country: val });
    }


    render() {
        //15
        const { errors } = this.state;
        return (

            <div className="register">
                <div className="container-reg">
                    <div className="reg-forms-container">
                        <div className="reg-signin-signup">
                            
                            <form action="#" className="reg-sign-in-form" onSubmit={this.onSubmit}>
                            <h1 className="reg-title">Sign Up</h1>
                            <p className="reg-title">Create your Account</p>
                                {/*
                                <Provider store={store}>
                                    <ImageUploader />
                                </Provider>
                                */}
                                
                                <div className="reg-input-filed">
                                <i className="fas fa-user"></i>
                                    <input
                                        type="text"
                                        //16

                                        className={classnames({
                                            "is-invalid": errors.fullName
                                        })}
                                        placeholder="User Name"
                                        name="fullName"
                                        //5 input fields 
                                        value={this.state.fullName}
                                        //8 bind onchange to the fields 
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.fullName && (
                                            <div className="invalid-feedback">{errors.fullName}</div>
                                        )
                                    }
                                </div>
                                <div className="reg-input-filed">
                                <i className="fas fa-envelope"></i>
                                    <input
                                        type="email"
                                        className={classnames({
                                            "is-invalid": errors.email
                                        })}
                                        placeholder="Email Address"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )
                                    }
                                </div>
                                <div className="reg-input-filed">
                                <i className="fas fa-calendar"></i>
                                    
                                    <input
                                        name="bod"
                                        type="date"
                                        className={classnames({
                                            "is-invalid": errors.endDate
                                        })}
                                        value={this.state.bod}
                                        onChange={this.onChange}
                                    />
                                    {errors.endDate && (//expression like an if statement
                                        <div className="invalid-feedback">{errors.endDate}</div>
                                    )}
                                </div>
                                <div className="reg-input-filed">
                                <i className="fas fa-venus-mars"></i>
                                    <select name="gender"  style={{border: "55px",  background:"#f0f0f0"}} value={this.state.value} onChange={this.onChange}>
                                        <option>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="reg-input-filed">
                                <i className="fas fa-globe"></i>
                                    <CountryDropdown
                                        style={{border: "55px",  background:"#f0f0f0"}}
                                        name="country"
                                        value={this.state.country}
                                        onChange={(val) => this.selectCountry(val)} />
                                </div>
                                <div className="reg-input-filed">
                                <i className="fas fa-city"></i>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Enter city"
                                        value={this.state.city}
                                        onChange={this.onChange} />
                                </div>
                                <div className="reg-input-filed">
                                <i className="fas fa-mobile"></i>
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        placeholder="Enter phone number"
                                        value={this.state.phoneNumber}
                                        onChange={this.onChange} />
                                </div>
                                <div className="reg-input-filed">
                                <i className="fas fa-lock"></i>
                                    <input
                                        type="password"
                                        className={classnames({
                                            "is-invalid": errors.password
                                        })}
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )
                                    }
                                </div>
                                <div className="reg-input-filed">
                                <i className="fas fa-clipboard-check"></i>
                                    <input
                                        type="password"
                                        className={classnames({
                                            "is-invalid": errors.confirmPassword
                                        })}
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={this.state.confirmPassword}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.confirmPassword && (
                                            <div className="invalid-feedback">{errors.confirmPassword}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <div onChange={this.onChange}>
                                        <input type="radio" value="Company" name="role" style={{
                                         position: "relative",
                                         cursor: "pointer",
                                         width: "20px",
                                         height: "20px",
                                         margin: "15px",
                                         border: "10px",   
                                        }} /> Company
                                  <input type="radio" value="Employee" name="role" style={{
                                         position: "relative",
                                         cursor: "pointer",
                                         width: "20px",
                                         height: "20px",
                                         margin: "15px",   
                                        }}
                                  /> Employee
                                  </div>
                                </div>
                                <div className="form-group">
                                <input type="file" id="resume" className="sr-only" aria-label="Resume"></input>     
                                <label for="resume" className="btn-cv" aria-hidden="true">Upload Resume</label> 
                                <input type="file" id="resume" className="sr-only1" aria-label="Resume"></input>     
                                <label for="resume" className="btn-img" aria-hidden="true">Upload Image</label>      
                                </div>
                                <div className="form-group">
                                
                                </div>
                                <input type="submit" value="Sign Up" className="btn-reg solid" onClick={this.onSubmit}/> 
                                <p className="reg-social-text">Or Sign Up with social platforms</p>
                                    <div className="reg-social-media">
                                    <a href="https://www.facebook.com/" className="reg-social-icon">
                                    <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" className="reg-social-icon">
                                    <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.gmail.com/" className="reg-social-icon">
                                    <i class="fab fa-google"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/" className="reg-social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    </div>
                            </form>
                        </div>
                    </div>
                   
         <div className="reg-panels-container">
        <div className="reg-panel reg-left-panel">
          <div className="reg-content">
            <h3>Welcome At Access Job  </h3>
            <p className="fas fa-check-square">
             Register now and let employers match you to their jobs.
            </p>
         <Link to="login">
            <button className="btn-reg transparent" id="reg-sign-up-btn">
              Sign In
            </button></Link>
          </div>
          <img src={regitsterlog} className="reg-image" alt="" />
        </div>
        
        </div> 



                </div>
            </div >
        );
    }
}

//11 proptypes
Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};

//10 mapstate
const mapStateToProps = (state) => ({
  errors: state.errors,
  security: state.security,
});

// 9 connect
export default connect(mapStateToProps, { createNewUser })(Register);

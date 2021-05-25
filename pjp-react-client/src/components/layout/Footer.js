import React , {  Component } from 'react'; 
import { Link } from 'react-router-dom';
import logo from "../../picture/Moh.svg";

import "../../css2/Footer.css"; 




class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <footer id="footer">
        <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-links">
            <h3>Access Jobs</h3>
            <p>
              Birzeit University  <br></br>
              Ramallah,West-Bank<br></br>
              palestine <br></br>
              
              <strong>Phone:</strong> 009705453052<br></br>
              <strong>Email:</strong> Access_jobs@gmail.com<br></br>
              <ul>
              <li><i className="fas fa-angle-right mt-2"></i> <Link className="mt-2" to='/aboutUs'>About Us</Link></li>
              <li><i className="fas fa-angle-right"></i> <Link to='/contactUs'>Contact Us</Link></li>
              </ul>
              </p>
           
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="fas fa-angle-right"></i> <Link to='/'>Home</Link></li>
              <li><i className="fas fa-angle-right"></i> <Link to='/findJobs'>Find Jobs</Link></li>
              <li><i className="fas fa-angle-right"></i> <Link to='/employerPostJob'>Employer/Job Seekers</Link></li>
              <li><i className="fas fa-angle-right"></i> <Link to='/blogs'>Blogs</Link></li>
              <li><i className="fas fa-angle-right"></i> <Link to='/pricing'>Pricing</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Links</h4>
            <ul>
              <li><i className="fas fa-angle-right"></i> <Link to='/Privacy'>Privacy Policy</Link></li>
              <li><i className="fas fa-angle-right"></i> <Link to='/Disclaimer'>Disclaimer</Link></li>
              <li><i className="fas fa-angle-right"></i> <Link to='/TermsOfUse'>Terms Of Use</Link></li>
              <li><i className="fas fa-angle-right"></i> <Link to='/'>Cv Templates Database</Link></li>
              <li><i className="fas fa-angle-right"></i> <Link to='/TrnaingCourses'>Training courses</Link></li>
            </ul>
          </div>
          

          <div className="col-lg-4 col-md-6 footer-newsletter">
            <center> <img src={logo} alt="logo" style={{ width: '200px', height:'90px'}} /></center>
            <center><h4>You can subscribe at any time.</h4></center>
            <p> Join Us Immediately To Get To know The Best Jobs.</p>
            <form  method="post">
              <input  type="email" name="email"placeholder='Your Email'/>
              <Link to='/contactUs'>
              <input type="submit" value="Contact Us" /></Link>
             
              
             
              {/*  <Link type="submit" value="Contact Us" to="/register" >Sign UP</Link>*/}

            </form>
          </div>

        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

<div className="mr-md-auto text-center text-md-left">
  <div className="copyright">
    &copy;. All Rights Reserved<strong><a className="ml-1">Access Job Team © 2021</a></strong>
  </div>
  <div className="credits">
   
  <strong><a>Designed by</a></strong>  <a href="https://AccessJob.com/">Access Job Team</a>
  </div>
  <div className='footer-logo'>
    <Link to='/' className='social-logo'>
      Access Job
      <i className='fab fa-typo3' />
    </Link>
  </div>
</div>
<div class="social-links text-center text-md-right pt-3 pt-md-0">
  <a href="/" className="twitter"><i className='fab fa-twitter'></i></a>
  <a href="/" className="facebook"><i className='fab fa-facebook-f'></i></a>
  <a href="/" className="instagram"><i className='fab fa-instagram'></i></a>
  <a href="/" className="youtube"><i className='fab fa-youtube'></i></a>
  <a href="/" className="linkedin"><i className='fab fa-linkedin'></i></a>
</div>
</div>

        </footer>
  
     
 </div>
    )
  }
}


export default Footer;



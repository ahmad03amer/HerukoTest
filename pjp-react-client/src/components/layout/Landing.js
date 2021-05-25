import React, { Component } from "react";
import weAreHiring from "../../imgs/we-are-hiring-5.jpg";
//when logged in prevent sign up
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Carsual from "./Carsual";
import '../Page_Css/Landing.css';


import Modal from 'react-bootstrap/Modal'


// picture for page 
import phone1 from "../../picture/home1.jpeg";
import p2 from "../../picture/2.png";
import p3 from "../../picture/3.png";
import Popup from "./Popup";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/");
    }


  }

  constructor () {
    super()
    this.state = {
      isOpen: false,
      addModalshow :false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }
  

  render() {
     let addModalClose =()=> this.setState({addModalshow : false});
   
       
    
    return (
      <div>
      

        {/* 



        <div className="container">





          <div className="row">
            <div className="col-md-12">
              <div className="text-lg-center text-left">
                <h3 className="mt-5 mb-lg-2 font-weight-bold">
                  {" "}
                  Explore Jobs By C....ategory{" "}
                </h3>
                <p className="mb-1 text-dark"> Pick from the list</p>
              </div>
            </div>
          </div>
               <div className="row mt-5">
            {/*<InfoConsumer> 

           {value=>{
           return value.info.map(item =>{
               return < Info key={item.id} item={item}/>;
           })
                }}
        </InfoConsumer>
        */}
        {/* </div> */}
        {/* </div> */}

        <div>

         
           {/* <div class="preloader">
            <span></span>
          </div>  */}

         
  <section className="home d-flex align-items-center" id="home" >
     <div className="effect-wrap">
        <i className="fas fa-plus effect effect-1"></i>
        <i className="fas fa-plus effect effect-2"></i>
        <i className="fas fa-circle-notch effect effect-3"></i>
     </div>
     <div className="container">
        <div className="row align-items-center">
           <div className="col-md-7">
              <div className="home-text">
                 <h1>Welcome to Access job </h1>
                 <p>
                 Post jobs online and reach hundreds of job seekers across 
                 the globe. Find the most relevant candidate online within
                  a few clicks.
                 </p>
                 <div className="home-btn">
                    <a href="#" data-scroll-goto="3" className="btn btn-1">download app</a>


                    
                   
      
                 
                   
                     <button type="button" className="btn btn-1 video-play-btn"   onClick = {()=> this.setState({addModalshow : true })}> <i className="fas fa-play"></i> </button>
                     <Popup
                     show ={this.state.addModalshow}
                     onHide ={addModalClose}
                     
                     />
                 
                 </div>
              </div>
           </div>
           <div className="col-md-5 text-center">
              <div className="home-img">
                 <div className="circle">
                 </div>
                 <img src={phone1} alt=""/>
              </div>
           </div>
        </div>
     </div>
  </section>





   {/*-------------------  How It Works Section Start  --------------------------*/}
  <section className="how-it-works section-padding">
     <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
               <div className="section-title">
                   <h2>how it <span>works</span></h2>
               </div>
            </div>
        </div>
        <div className="row">
           <div className="col-lg-3 col-md-6">
              <div className="how-it-works-item line-right">
                  <div className="step">1</div>
                  <h3>SignUP</h3>
                  <p>
                  Register now to be able to apply for jobs or post jobs
                  And browse many articles and courses for free. 
                  
                  </p>
              </div>
           </div>
           <div className="col-lg-3 col-md-6">
              <div className="how-it-works-item line-right">
                  <div className="step">2</div>
                  <h3>create profile</h3>
                  <p>
                  Create your account and subscribe to our services to be 
                  able to benefit from the best recommendations 
                  </p>
              </div>
           </div>
           <div className="col-lg-3 col-md-6">
              <div className="how-it-works-item line-right">
                  <div className="step">3</div>
                  <h3>search for jobs</h3>
                  <p>
                  Browse posted jobs, and apply for the right job through 
                  a wide variety of categories
                  </p>
              </div>
           </div>
           <div className="col-lg-3 col-md-6">
              <div className="how-it-works-item">
                  <div className="step">4</div>
                  <h3>submit</h3>
                  <p>
                  Post the job if you are the owner of the company,
                   or apply for it if you are an employee
                  </p>
              </div>
           </div>
        </div>
     </div>
  </section>
  {/* --------------------------- How It Works Section End ----------------------------------------------- */}


  {/* <!-- Testimonials Section Start --> */}
  
   {/* Testimonials Section End  */}

   {/* Toge Theme  */}
   <div className="toggle-theme">
      <i className="fas"></i>
   </div>
  
  {/* Vedio pop up  */}
  
  <div className="video-popup">
     <div className="video-popup-inner">
        <i className="fas fa-times video-popup-close"></i>
        <div className="iframe-box">
           <iframe id="player-1" src="https://www.youtube.com/embed/o1eY1MPcRQs" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
     </div>
  </div>


  


 
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(Landing);

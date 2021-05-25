import React, { Component , useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components'; 
import imag from "./imgCarousel/silde1job.jpg"; 
import imag2 from "./imgCarousel/s2.jpg"; 
import imag3 from "./imgCarousel/slide3.jpg"; 
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import Search from '../Layout/Search';

class Carouse extends Component {
    constructor(props) {
        super(props)
        
        this.state ={
           count:0 
        }
    }
    handleSelect = (selectedIndex, e ) =>{
       this.setState({
        count:this.state.count + 1 
       })
      };

  
    render() {
        return (
            <div className="hero"> 
             
            <Carousel fade="true" onClick={this.handleSelect}>
              <Carousel.Item>
                      <img 
                       className="d-block w-100 " 
                       src={imag}
                       alt="First Page In Slide For Home Page"
                       style={{height: "88vh"}}
                        
                     />

                    
                     
                <Carousel.Caption>
                      
                       
                            <Search/>
                        <h2 className="text-dark" > Welcome to <span>Access Job</span> </h2>
                       <p className=" text-info animate__animated animate__fadeInUp "> It Is Usefull To Find a Remote Job Here </p>
                       <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                         
                </Carousel.Caption>
              </Carousel.Item>
            
              <Carousel.Item>
                      <img 
                       className="d-block w-100" 
                       src={imag2}
                       alt="Secand Page In Slide For Home Page"
                       style={{height: "88vh"}}
                    />
                    
                    {/* 
                    <div className="home-bg-caption w-100">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-2 col-lg-1"></div>
                          <div className="col-xl-8 col-lg-10">
                            <div className="text-white">
                              <h1 className="mb-0 1h-70 1h-96-lg fs-34 fs-48-lg">
                                "Jobs IN All "
                                <span className="country_label">World</span>
                              </h1>
            
                            </div>
                          </div>
                        </div>
            
                      </div>
                    </div>
                        */}
                    <Carousel.Caption>
                    <h1 className="mb-0 1h-70 1h-96-lg fs-34 fs-48-lg">
                                 Jobs IN All  
                                <span className="country_label"> World</span>
                              </h1>
                        <h2 className="mb-0 1h-70 1h-96-lg fs-34 fs-48-lg"> Access Jobs </h2>
                        <h4><p className="text-danger mb-0 1h-70 1h-96-lg fs-34 fs-48-lg"> It's good to find a job these days and to increase your 
                        chances of getting a job at home, browse our website to find the best opportunities 
                        to work at home.   </p></h4>
                    </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                    <img 
                    className="d-block w-100" 
                    src={imag3}
                    alt="Therd Page In Slide For Home Page "
                    style={{height: "88vh"}}
                    />
                    <Carousel.Caption>
                      <h2 className="text-dark"> Work From Home  </h2>
                       <p> It is Usefull to find a remote job here </p>
                    </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div> 
        )
    }
}

export default Carouse; 



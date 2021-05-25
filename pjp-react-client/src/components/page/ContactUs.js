import React from "react";

import { MDBRow, MDBCol,MDBView,MDBMask, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer,MDBAnimation } from "mdbreact";
import supports from '../../picture/support.jpg'; 

import '../../components/Page_Css/Contact.css'

const ContactUs = () => {
  return (
    <section className=" ml-3 mr-3 md-5">

       <MDBRow>
  
       <MDBView>
      
       <div className = "contact-bg">
        <h3>Get in Touch with Us</h3>
        <h2>contact us</h2>
        <div className = "line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className = "text">Feel free to get in touch with us , We always open to duscssing new projects , creative ideas or opportunities to be part of your vision.
        Please fill out the quick form and we will be in touch with lightening speed..</p>
      </div>
      
    <MDBMask className="flex-center">
      <MDBContainer center >
      
      <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  
                >
     
    


     
     
      
      </MDBAnimation>

      
      </MDBContainer>
      </MDBMask>
  </MDBView>


         
        </MDBRow>
     

      <MDBRow className="text-center mt-5 md-5">


<MDBCol md="3">  
<MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
  <p className="mb-md-0">Palestine-Ramallah-275</p>
</MDBCol>


<MDBCol md="3">
  <MDBIcon icon="phone" size="2x" className="blue-text " />
  <p className="mb-md-0">Tel :+970569898870</p>
</MDBCol>
<MDBCol md="3">
<MDBIcon icon="clock" size="2x" className="blue-text " />
<p>8:00 AM to  16:00 PM (Sun-Tue)</p>
</MDBCol>

<MDBCol md="3">
   <MDBIcon icon="envelope" size="2x" className="blue-text " />
  <p>accessjob@gmail.com</p>
</MDBCol>



</MDBRow>
      
      <MDBRow className="mt-5">
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header ">
                <h2 className="mt-2" className="blue-text font-weight-bold ml-2" >
                <MDBIcon far icon="comments" size="2x" className="blue-text mr-1"  /> Write to us:
                </h2>
              </div>
              <p className="dark-grey-text font-weight-bold">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center " size="2x">
              <MDBBtn outline bold color="blue" >
              Send
            <MDBIcon far icon="paper-plane " className="ml-1" />
          </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
        <img src={supports} className="img-fluid" alt="" />
         
        </MDBCol>
       
      </MDBRow>
      <MDBRow>
      <MDBCol className="mt-5">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.062649904854!2d35.18419578545721!3d31.95919703254043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d2a45f6505177%3A0x59cc7240d2f7d960!2z2KzYp9mF2LnYqSDYqNmK2LEg2LLZitiq!5e0!3m2!1sar!2s!4v1617240307198!5m2!1sar!2s"
              
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />

        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default ContactUs;

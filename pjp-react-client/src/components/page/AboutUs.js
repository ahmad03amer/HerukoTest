import React, { Component } from "react";
import "../Page_Css/AboutUs.css";
import malak from '../../picture/mlk.jpg';
import mohy from '../../picture/mohy.jpg';
import ahmad from '../../picture/ahmad1.jpg';
import abd from '../../picture/abd.jpg';
import why from '../../picture/why.png';
import about from '../../picture/about2.jpg';
import skiles from '../../picture/skills.png';
import { Link } from "react-router-dom";
class AboutUs extends Component {
  render() {
    return (
      <div>
        {/*  ======= About Us Section ======= -->*/}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
            </div>

            <div className="row content">
              <div className="col-lg-6">
                <p>
               <b> Access Jobs </b>site, Ramallah-Palestine, is the first site 
               to be established at Birzeit University for employment or job search, 
               this site was established in 2021 as a home job site.

                </p>
                <ul>
                  <li>
                  <i className="fas fa-angle-double-right"></i> 
                  As there are more than one hundred thousand job seekers in all 
                  fields and specialties need a help to find job.
                  
                  </li>
                  <li>
                  <i className="fas fa-angle-double-right"></i> Our vision
                    The transformation into a direct, electronic extension 
                    of people's lives is 
                    indispensable, respected, and admired.
                  </li>
                  <li>
                  <i className="fas fa-angle-double-right"></i> 
                  Our mission
                    empowering employers and job seekers with the necessary 
                    tools and information to find 
                    jobs and candidates for them in Palestine.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                 <b>Access Jobs </b>will play an important role in providing comprehensive and 
                integrated employment solutions for employers and job seekers in 
                Palestine, as the site will build permanent relationships with all 
                international and local institutions operating in Palestine based 
                on providing professional and professional services

                </p>
                There is many employee and employer we will work to facilitate 
                them to find and published a suitable job for them from home in light of the Corona pandemic .
                <p>

                </p>
                <a href="/" className="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>



        <section className="container py-3">

          <div className="card">
            <div className="row ">
              <div className="col-md-7 px-3">
                <div className="card-block px-6">
                  <h4 className="card-title">
                 <spam><b> Access jobs</b></spam> It's a graduation project
                  </h4>
                  <p className="card-text">
                  This website, which you are seeing now, is designed, constructed by 
                  three students from Birzeit University, in order to obtain a bachelor's degree 
                  from Birzeit University.
                  </p>
                  <p className="card-text">
                  we worked this site with love to provide service to people who are looking for a job that suits 
                  them and suits their aspirations in life, and the supervisor of this work was Dr. Abdul Latif Abu Issa,
                   who did not spare us any knowledge and science.
                  </p>
                  <p className="card-text">
                  Thank you for using our beautiful website.
                   We hope you like it and achieves your request.
                  </p>
                  <br></br>

                  <a href="/" className="mt-auto btn btn-primary  ">
                    Read More
                  </a>
                </div>
              </div>

              <div className="col-md-5">
                <div
                  id="CarouselTest"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#CarouselTest"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#CarouselTest" data-slide-to="1"></li>
                    <li data-target="#CarouselTest" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block"
                        src={about}
                        alt=""
                      ></img>
                    </div>
                    

                    <a
                      className="carousel-control-prev"
                      href="#CarouselTest"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#CarouselTest"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/*  <!-- ======= Why Us Section ======= -->*/} 
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">

        <div className="row">
        <div className="carousel-item active">
                      <img
                        className="d-block"
                        src={why}
                        alt=""
                      ></img>
                    </div>
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content">
              <h3>Why ? <strong>Access Jobs</strong></h3>
              <p>
              Why should a home job seeker, or someone looking for an employee use this site, or someone looking for a site to post a specific job?
              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span>Provides efficient recruitment services? <i class="fas fa-angle-double-down"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                   Access Jobs provides effective recruitment services for companies and institutions by posting jobs through their recruitment platform. We will help and we want to help thousands of international and local institutions, private and government companies, and our partners to promote their jobs that they are looking for an employee for.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> What distinguishes Access Jobs from other sites? <i class="fas fa-angle-double-down"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    What distinguishes Access Jobs from others is the type and difference of jobs, the manner of applying for these jobs displayed on the site, the number of employment applications that we send to the employer upon announcing a job, in addition to the professional service enjoyed by the Access Jobs staff.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> What is the difference from other sites in posting jobs? <i class="fas fa-angle-double-down"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    Access job it has the simplest way to post the job with different type,and have an easier way to apply for any job, then connect with the company.
                    </p>
                  </div>
                </li>
                <li>
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed"><span>04</span> What is the type of job in access jobs? <i class="fas fa-angle-double-down"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                    In access jobs have a many type of jobs like Full-time, Part-Time,By-Task jobs and have many category in it. 
                    </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img"  data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        

       
        </div>

      </div>
    </section>
    {/* <!-- End Why Us Section -->*/}


   { /* <!-- ======= Skills Section ======= -->*/}
    <section id="skills" className="skills mt-5 mb-5">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
            <img src={skiles} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>To See the Actual Distribution Of The Jobs Offered On The Site</h3>
            <p className="fst-italic">
            You will also notice through the table the actual distribution of the jobs 
            offered through the site, which are divided into three forms Full-Time, Part-Time, By-Task jobs.
            </p>

            <div className="skills-content">

              <div className="progress">
                <span className="skill">Remote Jobs <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar1" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Full-Time jobs <i className="val">65%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar2" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Part-Time jobs <i className="val">25%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">By-Task jobs <i className="val">20%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar4" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
   {/*  <!-- End Skills Section -->*/}











   {/* <!-- ======= Services Section ======= -->*/} 
    <section id="services" className="services section-bg">
      <div className="container mt-2" data-aos="fade-up">
      
        <div className="section-title">
          <h2>Services</h2>
          <p>There are many services provided by the site to users, so that they can use the site in a smooth and flexible manner, in addition to that, these services are only a small part of what the site provides to the user.</p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="fad fa-file-user"></i></div>
              <h4><Link to="/register">Create Account</Link></h4>
              <p>The registration is a one of services in our website, we have two types of registration to create an account, one of them is for the employee if he needs to apply to a job, and the other type is for employer 'company' you can register/sign-up now.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="fad fa-file-search"></i></div>
              <h4><Link to="/findJobs">Find A jobs</Link></h4>
              <p>Find A job it is one of the services of our website, you can easily find a job in many filed with many different of types like Full-time, Part-time, By-Task jobs by using the search engine on our web site, then you can apply and upload your CV for the suitable job you need. </p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-upload"></i></div>
              <h4><Link to="/addJob">Post A Jobs</Link></h4>
              <p>Posting jobs the website provides the company, employer with a form for posting many jobs, in a different type like "Full-Time, Part-Time, By Task jobs" and many filed "Engineering, Accounting, Graphics etc..." of jobs.</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="fab fa-blogger"></i></div>
              <h4><a href="/Blogs">Blogs</a></h4>
              <p>On our site we display many articles that have great benefit for the user, so that whoever is looking for work can increase his chances of knowing to get a job, in addition to that there are many articles that show how to use the site</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    
    {/*<!-- End Services Section --> */}


  {/*   <!-- ======= Team Section ======= -->*/}
    <section id="team" className="team section-bg mb-5 mt-5">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team oF Access Jobs</h2>
          <p>We have made a lot of effort to make efforts for this optimal site for every place, and for it to be the best for you to find a suitable fit that meets your needs through the home</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div className="pic"><img src={abd} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Abdellatif Abu-Issa</h4>
                <span>Superviser</span>
                <p>It was my pleasure to be the supervisor of the creation of this site</p>
                <div className="social">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-google-plus"></i>
                      </a>
                      
                    </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div className="pic"><img src={ahmad} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Ahmad Amer </h4>
                <span>Back-End Developer</span>
                <p>It is very nice to work for you so that you can get a job through our website</p>
                <div className="social">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-google-plus"></i>
                      </a>
                      
                    </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div className="pic"><img src={mohy} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Mohye Ahmad</h4>
                <span>DevOps</span>
                <p>It is very nice to work for you so that you can get a job through our website</p>
                <div className="social">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-google-plus"></i>
                      </a>
                      
                    </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div className="pic"><img src={malak} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Malak Ibrahim </h4>
                <span>Front-End Developer</span>
                <p>It is very nice to work for you so that you can get a job through our website</p>
                
                <div className="social">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="/">
                        {" "}
                        <i className="fa fa-google-plus"></i>
                      </a>
                      
                    </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    
    
    
    {/*<!-- End Team Section --> */}


    <section id="cta" className="cta mt-5">
      <div className="container" data-aos="zoom-in">

        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Contact Us</h3>
            <p> If You have any problem please contact us to solve this problem </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="/">Contact Us</a>
          </div>
        </div>

      </div>
    </section>



       
      </div>
    );
  }
}

export default AboutUs;

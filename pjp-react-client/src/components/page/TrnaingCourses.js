import React, { Component } from 'react'
import {Link} from "react-router-dom"; 
import '../Page_Css/TraningCourse.css';
import blog from '../../picture/about.jpg';
// for the first section to have a note in the Corses 
import note from '../../picture/note2.jpg';

// for the 1st section in the cards
import Ml from '../../picture/ML.jpg';
import Ml2 from '../../picture/ml2.jpg';
import c from '../../picture/c12.png';


// IMPORT FOR THE  2ND Section for the finance.
import FIN from '../../picture/fin8.jpg';
import ds from '../../picture/ds.png';

// IMPORT FOR THE  3ND Section for the finance.

import ms2 from '../../picture/ms2.png';
import dl from '../../picture/dl2.jpg';
import bs from '../../picture/bf.jpg';
// IMPORT FOR THE  4ND Section for the finance.
import ai1 from '../../picture/ai3.png';
import msl from '../../picture/msl.jpg';

import iMSA from '../../picture/MSA.jpg';
import ss from '../../picture/ss.jpg';
import mba from '../../picture/mba.jpg';





class TrnaingCourses extends Component {
    render() {
        return (
            <div> 


 {/* <!-- ======= Hero Section ======= -->*/}
  <section id="hero2" className="heroo mb-1">
    <div className="hero-container2 " data-aos="fade-up">
      <h1>Welcome To Access Jobs Training Courses</h1>
    
      <Link to="/login" className="btn-get-started2 scrollto">Go To Sign Up</Link>
    </div>
  </section>
  
  {/* <!-- End Hero -->*/} 
  <section id="counts2" className="counts2 section-bg">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up"> <i className="fas fa-smile-beam"></i>21</span>
            
           
            <p>Students</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up"><i className="fas fa-book"></i>12</span>
            <p>Courses</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up"><i className="fas fa-school"></i>1</span>
            <p>Partners</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up"><i className="fas fa-user-graduate"></i>3</span>
            <p>Trainers</p>
          </div>

        </div>

      </div>
    </section>


    <section id="about2" className="about2">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={note} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content2 mt-5">
            <h3>Ways Online Learning May Benefit Job Seekers.</h3>
            <p className="font-italic">
            Online courses and degrees are increasingly popular options for today’s students. The Online Learning Consortium reports that more than 6.7 million higher education students take at least one of their courses online.
            </p>
            <ul>
              <li><i className="fas fa-check"></i> Take Classes While Working.</li>
              <li><i className="fas fa-check"></i>Online Learning Offers Time Savings and Flexibility.</li>
              <li><i className="fas fa-check"></i> You Can Apply What You’re Learning to Your Current Job.</li>
            </ul>
            <p>
            Online courses can help you stay sharp, focused, energized, and provide you with the skills and knowledge to understand and tackle workplace issues. They enable you to continue adding value to your job and for your employer. More importantly, going back to school online can provide you with the flexibility you need to build your career without sacrificing your job, family, money or even your social life. Given the many advantages of online learning and furthering your education, you can see that it’s worth trying!
            </p>

          </div>
        </div>

      </div>
    </section>

    <div className="container">
            <div className="row">
            <div className="col-md-12">
            <div className="text-lg-center text-left">
            <h3 className="mt-5 mb-lg-2 font-weight-bold" > Explore Training Courses  By Category </h3>
            <p className="mb-1 text-dark"> Pick from the cards</p>
            </div>
            </div> 
            </div>
            </div>




    <section id="courses" className="courses mt-5 mb-5">
      <div className="container" data-aos="fade-up">
      <strong><h4 className="mt-5 mb-lg-4 font-weight-bold" >- Top Online Courses</h4></strong>
        <div className="row" data-aos="zoom-in" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          
            <div className="course-item">
              <img src={Ml} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Computer Engineer</h4>
                  <p className="price">Free</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/learn/machine-learning", "_blank")} >Machine Learning</a></h3>
                <p>This course provides a broad introduction to 
                  machine learning, datamining, and statistical pattern 
                  recognition Supervised learning (parametric/non-parametric algorithms, support vector machines, kernels, neural networks). (ii) Unsupervised learning. </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={Ml} className="img-fluid" alt=""/>
                    <span>Andrew Ng</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="fas fa-user-friends"></i>&nbsp;61
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;53
                  </div>
                </div>
              </div>
            </div>
          </div> 
          

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img src={c} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Computer Science</h4>
                  <p className="price">Free</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/learn/machine-learning", "_blank")}>C++ For C Programmers</a></h3>
                <p>This course is for experienced C programmers who want to program in C++. The examples and exercises require a basic understanding of algorithms and object-oriented software.
                Language English How To Pass Pass all graded assignments to complete the course. 

                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={c} className="img-fluid" alt=""/>
                    <span>Ira Pohl</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;12
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;5
                  </div>
                </div>
              </div>
            </div>
          </div> 

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="course-item">
              <img src={FIN} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Business</h4>
                  <p className="price">Free</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/learn/finance-fundamentals", "_blank")}>Fundamentals of Finance</a></h3>
                <p>
                In this course, you’ll learn the basic fundamentals of 
                corporate finance. Based on the pre-term qualifying courses 
                for Wharton MBA students, 
                this course for learners who need a refresher in financial concepts, 
                or for those who are learning about corporate finance for the first 
                time. 
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={FIN} className="img-fluid" alt=""/>
                    <span>Jessica Wachter</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;63
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;57
                  </div>
                </div>
              </div>
            </div>
          </div>
        

         
          <section id="courses" className="courses mt-2 mb-5">
          <div className="container" data-aos="fade-up">
               <strong><h4 className="mt-5 mb-lg-0 font-weight-bold" >-Top Online Specializations</h4></strong>
               <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            
            <div className="course-item">
              
              <img src={ds} className="img-fluid" alt="..."/>
              <div className="course-content">
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Computer Engineer</h4>
                  <p className="price">$150</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/specializations/jhu-data-science", "_blank")}>Data Science Specialization</a></h3>
                <p>Launch Your Career in Data Science. 
                  A ten-course introduction to data science, 
                  developed and taught by leading professors AI and machine 
                  learning adoption will give rise to many new roles in tech—including 
                  data science security professionals. These professionals will analyze 
                  and securely process data to customers, leveraging Python, R, or SQL 
                  for data science and analysis to have a more information for it.   </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={ds} className="img-fluid" alt=""/>
                    <span>Jeff Leek</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;218
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;183
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={dl} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Data Science</h4>
                  <p className="price">$200</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/specializations/deep-learning", "_blank")}>Deep Learning Specialization</a></h3>
                <p>
                In this Specialization, you will build and train neural network 
                architectures such as Convolutional Neural Networks, Recurrent Neural
                 Networks, LSTMs, Transformers, and learn how to make them better with 
                 strategies such as Dropout, BatchNorm, Xavier/He initialization, and more. 
                 Get ready to master theoretical concepts and their industry applications 
                 using Python and more.

                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={dl} className="img-fluid" alt=""/>
                    <span>Kian Katanforoosh</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;117
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;93
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={bs} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Business Essentials</h4>
                  <p className="price">$180</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/specializations/wharton-business-foundations", "_blank")}>Business Foundations Specialization</a></h3>
                <p> 
                In this Specialization, you’ll develop basic literacy in the language of 
                business, which you can use to transition to a new career, start or improve
                 your own small business. In five courses, you’ll learn the fundamentals of marketing, 
                 accounting,finance. In the final Capstone Project, 
                 you’ll apply the skills learned in a real business challenge.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={bs} className="img-fluid" alt=""/>
                    <span>Barbara E. Kahn</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;8
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;2
                  </div>
                </div>
              </div>
            </div>
          </div> 
          </div>
          </div> 
          </section>
          <section id="courses" className="courses mt-2 mb-5">
          <div className="container" data-aos="fade-up">
               <strong><h4 className="mt-5 mb-lg-0 font-weight-bold" >- Online Certificates</h4></strong>
               <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            
            <div className="course-item">
              
              <img src={ms2} className="img-fluid" alt="..."/>
              <div className="course-content">
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Engineer</h4>
                  <p className="price">$4,500</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/mastertrack/big-data-asu", "_blank")}>Big Data MasterTrack® Certificate</a></h3>
                <p>Data mining techniques provide the first level of abstraction 
                  to raw data by extracting patterns, making big data analytics tools
                   increasingly critical for providing meaningful information to 
                   inform better business decisions, and applying statistical 
                   learning theory to find a predictive function based on data. 
                   You’ll learn to apply mathematical theory and decision making techniques that are vital to big data analysis, classification, clustering, and association rule mining through real-world projects designed by faculty from Arizona State University. </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={ms2} className="img-fluid" alt=""/>
                    <span>Arizona University</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;8
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;13
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={ai1} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>AI and Machine Learning</h4>
                  <p className="price">$4500</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/mastertrack/ai-machine-learning-asu", "_blank")}>AI and Machine Learning MasterTrack® Certificate</a></h3>
                <p>In this program, you will complete a real module 
                  from the online Master of Computer Science program that will help you 
                  understand artificial intelligence through a combination of both theory 
                  and practice. Through a series of interactive lectures and team-based projects,
                   you will explore how machines learn in the form of learning paradigms, how to 
                   create autonomous agents that can reason, and act on their own, and how 
                   to train and optimize deep neural networks from Computer Science 
                   degree at Arizona State University.</p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={ai1} className="img-fluid" alt=""/>
                    <span>Arizona University</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;5
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;2
                  </div>
                </div>
              </div>
            </div>
          </div> 




          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={msl} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Social Work</h4>
                  <p className="price">$2000</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/mastertrack/social-work-umich", "_blank")}>MasterTrack® Social Work: Practice, Policy and Research</a></h3>
                <p>
                In this course, you will learn how social workers in the United States 
                create change and support the resilience of individuals, families, and 
                communities. You’ll have an opportunity to explore the social work profession, 
                the different roles of social workers in a range of settings, the cross-cutting 
                themes that guide social work practice, the history of social work, and current 
                challenges.
                Using a social justice lens, you’ll reflect on current challenges 
                facing the lives of individuals, families, and communities, and 
                examine ways to advocate for needed changes.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={msl} className="img-fluid" alt=""/>
                    <span>University Of Michigan </span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;1
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;0
                  </div>
                </div>
              </div>
            </div>
          </div> 
          </div>
          </div> 
          </section>
          <section id="courses" className="courses mt-1 mb-5">
          <div className="container" data-aos="fade-up">
               <strong><h4 className="mt-5 mb-lg-0 font-weight-bold" >- Online Degree Programs</h4></strong>
               <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            
            <div className="course-item">
              
              <img src={iMSA} className="img-fluid" alt="..."/>
              <div className="course-content">
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Accounting</h4>
                  <p className="price">$20,564</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/degrees/imsa", "_blank")}>Online Master's of Accounting (iMSA)</a></h3>
                <p>
                The University of Illinois’ Gies College of Business, consistently ranked 
                among the nation's top three accounting programs, is a revered destination 
                for accounting education globally.
                The online Master of Science in Accounting (iMSA) provides students 
                with skills in analytical thinking, data mining, and strategic 
                accounting. The accounting degree is intentionally flexible to 
                address the needs of today’s students: whether they seek to begin 
                their career as an accountant, become a CPA, improve their standing 
                in the accounting field and become a CFO, or want to leverage 
                analytical skills in their existing non-accounting career.
                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={iMSA} className="img-fluid" alt=""/>
                    <span>University of Illinois</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;2
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;0
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={ss} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Master of Computer Science</h4>
                  <p className="price">$21,440</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/degrees/master-of-computer-science-illinois", "_blank")}>Master of Computer Science (Featuring Data Science Track)</a></h3>
                <p>
                The University of Illinois offers a separate, more flexible track for students 
                who are eager to explore several advanced topics in computer science as part of
                 their degree program. This track is ideal for learners who want to build skills 
                 in at least four core areas of computer science, choosing from topics that include 
                 artificial intelligence, database and information systems, interactive computing, 
                 software engineering, scientific computing, and high-performance computing you’ll be able to apply mathematical foundations, algorithmic principles, and computer science theory to real-word problems.

                </p>
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={ss} className="img-fluid" alt=""/>
                    <span>University of Illinois</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;1
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;0
                  </div>
                </div>
              </div>
            </div>
          </div> 


          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-5">
            <div className="course-item">
              <img src={mba} className="img-fluid" alt="..."/>
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Business Degrees</h4>
                  <p className="price">$21,744</p>
                </div>

                <h3><a onClick={()=> window.open("https://www.coursera.org/degrees/business", "_blank")}>Master of Business Administration(MBA)</a></h3>
                <p>
               
                Students in the iMBA program earn the same high-quality MBA degree 
                that on-campus students have been earning for decades--but without 
                needing to put career or family life on hold. Students achieve business 
                mastery, gain lifelong leadership skills, and build a global network as they 
                work alongside fellow students and faculty The iMBA program features live global 
                classrooms via web conferencing, team projects, and personal interaction with 
                professors during virtual office hours. The nearly 2,000 students in the iMBA 
                family represent more than 48 states across the United States
                The program was hailed as a “breakthrough” by Poets. 

                </p>


                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={mba} className="img-fluid" alt=""/>
                    <span>University of Illinois</span>
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                  <i className="fas fa-user-friends"></i>&nbsp;2
                    &nbsp;&nbsp;
                    <i className="fas fa-heart"></i>&nbsp;0
                  </div>
                </div>
              </div>
            </div>
          </div> 
          </div>
          </div> 
          </section>    

        </div>

      </div>
    </section>
    </div>
        )
    }
}

export default TrnaingCourses;

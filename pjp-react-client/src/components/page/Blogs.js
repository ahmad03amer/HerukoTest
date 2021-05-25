import React, { Component } from "react";
import "../Page_Css/Blog.css";

import blog from "../../picture/about.jpg";
import blog1 from "../../picture/search.jpg";
import blog2 from "../../picture/job.jpg";
import blog3 from "../../picture/cio_career.png";
import searchJ from "../../picture/search.png";
import interview from "../../picture/interview.jpg";
import flex1 from "../../picture/flex.png";
import survy from "../../picture/women-work-home-353x177.png";
import buzze from "../../picture/buzzel.jpg";
import bridg from "../../picture/bridge-jobs.png";

import moving from "../../picture/moving.jpg";
import company25 from "../../picture/25company.jpg";
import company30 from "../../picture/company30.jpg";
import company23 from "../../picture/company23.jpg";

class Blogs extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Hero Section ======= -->*/}
        <section id="hero" className="heroo mb-1">
          <div className="hero-container " data-aos="fade-up">
            <h1>Welcome To Access Jobs Blog</h1>
            <h2>Blogs of Access jobs to help you to have more knowledge </h2>
            <a href="/" className="btn-get-started scrollto">
              Go To add your blog
            </a>
          </div>
        </section>

        {/* <!-- End Hero -->*/}

        {/*  <!-- ======= About Section ======= -->*/}
        <section id="about" className="about mt-0">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-lg-11">
                <div className="row justify-content-end">
                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box py-5">
                      <i className="fas fa-smile-beam mt-3"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="65"
                        className="purecounter"
                      >
                        5006
                      </span>
                      <p>Happy Clients</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box py-5">
                      <i className="fad fa-user-hard-hat mt-3"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="85"
                        className="purecounter"
                      >
                        12157
                      </span>
                      <p>Jobs</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box pb-5 pt-0 pt-lg-5">
                      <i className="fas fa-calendar-day mt-3"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="27"
                        className="purecounter"
                      >
                        142
                      </span>
                      <p>Jobs in Day</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                    <div className="count-box pb-5 pt-0 pt-lg-5">
                      <i className="fas fa-award mt-3"></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="22"
                        className="purecounter"
                      >
                        0
                      </span>
                      <p>Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 video-box align-self-baseline position-relative mt-4">
                <img src={searchJ} className="img-fluid" alt="img" />
                <a
                  target="_blank"
                  href="https://www.youtube.com/watch?v=afKwiLCUtEQ&t=74s"
                  className="glightbox play-btn mb-5 mt-5"
                ></a>
              </div>

              <div className="col-lg-6 pt-3 pt-lg-0 content">
                <h3>Responding to an online job posting</h3>
                <p className="fst-italic">
                  Here are some things you can do to improve an online job
                  application:
                </p>
                <ul>
                  <li>
                    <i className="fas fa-check-double"></i> Research the
                    employer online and read through their company website.
                  </li>
                  <li>
                    <i className="fas fa-check-double"></i> Make sure that your
                    resume is up-to-date and clearly demonstrates how your
                    skills relate to the position you are applying for.
                  </li>
                  <li>
                    <i className="fas fa-check-double"></i> Your cover letter
                    should explain why you are a good fit for the position.
                  </li>
                  <li>
                    <i className="fas fa-check-double"></i>A resume and cover
                    letter need to look professional.
                  </li>
                </ul>
                <div className="read-more">
                  <a
                    target="_blank"
                    href="https://edu.gcfglobal.org/en/jobsearchandnetworking/find-a-job-online/1/"
                   
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- End About Section -->*/}

        {/*  <!-- ======= Cta Section ======= -->*/}
        <section id="cta" className="cta mt-5">
          <div className="container" data-aos="fade-in">
            <div className="text-center">
              <h3>Join for our family </h3>
              <p>
                {" "}
                To post your job vacancies and find the best job seekers
                subscribe ..
              </p>
              <a className="cta-btn" href="/Pricing">
                Subscribe
              </a>
            </div>
          </div>
        </section>
        {/*  <!-- End Cta Section --> */}

        {/* <!-- ======= Blog Section ======= -->*/}
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8 entries">
                <article className="entry mt-5">
                  <div className="entry-img">
                    <img src={blog2} alt="" className="img-fluid" />
                  </div>

                  <h2 className="entry-title">
                    <a
                      target="_blank"
                      href="https://theundercoverrecruiter.com/build-trust-with-remote-workers/"
                    >
                      Building Trust with Your Remote Workers
                    </a>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i class="fas fa-user"></i> <a href="/">Sean Bave</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i class="fas fa-clock"></i>{" "}
                        <a href="/">
                          <time dateTime="2021-05-01">May 1, 2021</time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i class="fas fa-comments"></i>{" "}
                        <a href="/">0 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      In today’s hyper-connected world, employees don’t have to
                      be in the office to be productive. Many companies have
                      identified remote working as a viable option to hire the
                      best staff. Tech companies, always ahead of the game, have
                      been doing this for years. In fact, 36% of developers work
                      remotely at least a few days each month, while 9% do so
                      full time, according to Stack Overflow’s Developer
                      Ecosystem Report....
                    </p>
                    <div className="read-more">
                      <a
                        target="_blank"
                        href="https://theundercoverrecruiter.com/build-trust-with-remote-workers/"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
                {/* <!-- End blog entry -->*/}

                <article className="entry">
                  <div className="entry-img">
                    <img src={blog1} alt="" className="img-fluid" />
                  </div>

                  <h2 className="entry-title">
                    <a href="/">Using the Internet in Your Job Search</a>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-user"></i>{" "}
                        <a href="/"> Susan Epstein</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-clock"></i>{" "}
                        <a href="/">
                          <time dateTime="2021-05-01">May 1, 2021</time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-comments"></i>{" "}
                        <a href="/">0 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      The Internet provides you with many options and tools for
                      a comprehensive job search. You can identify job openings
                      throughout the world, locate and copy files of employer
                      literature, exchange messages with professionals in your
                      field, share ideas and information with specialty user
                      groups, and find advice on résumé writing, interviewing,
                      etc. Employers increasingly use the Internet as a
                      recruiting tool. Many job search services and resources on
                      the Internet are free to job seekers, but some are not.
                    </p>
                    <div className="read-more">
                      <a
                        target="_blank"
                        href="https://career.fsu.edu/sites/g/files/imported/storage/original/application/27ba368e3cba4cc02d2931a2be2f4f3d.pdf"
                        target="_blank"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </article>
                {/*  <!-- End blog entry -->*/}

                <article className="entry">
                  <div className="entry-img">
                    <img src={blog3} alt="" className="img-fluid" />
                  </div>

                  <h2 className="entry-title">
                    <a
                      target="_blank"
                      href="https://enterprisersproject.com/article/2020/6/it-careers-remote-work-expands-options"
                    >
                      4 ways remote work could dramatically reshape your options
                    </a>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-user"></i>{" "}
                        <a href="/">Melissa Swift</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-clock"></i>{" "}
                        <a href="/">
                          <time dateTime="2021-05-01">June 24, 2020</time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-comments"></i>{" "}
                        <a href="/">0 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      Remote work changes your job. Sometimes that’s great, as
                      when you sit with your laptop sipping homemade cold brew
                      on your porch, enjoying the morning breeze. Sometimes
                      that’s more challenging, as you when you find yourself
                      deploying a good old-fashioned football stiff-arm to try
                      to keep your rampaging preschooler and attention-seeking
                      goldendoodle out of the Zoom frame, all while your
                      internet connection labors to transmit data at the speed
                      of 1994 dial-up.
                    </p>
                    <div className="read-more">
                      <a
                        target="_blank"
                        href="https://enterprisersproject.com/article/2020/6/it-careers-remote-work-expands-options"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </article>

                {/* <!-- End blog entry -->*/}

                <article className="entry">
                  <div className="entry-img">
                    <img src={interview} alt="" className="img-fluid" />
                  </div>

                  <h2 className="entry-title">
                    <a
                      target="_blank"
                      href="https://edu.gcfglobal.org/en/jobsearchandnetworking/interviewing-for-a-job-with-a-criminal-record/1/"
                    >
                      Interviewing for a job with a criminal record
                    </a>
                  </h2>

                  <div className="entry-meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-user"></i>{" "}
                        <a href="/">GCF Global [Website] </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-clock"></i>{" "}
                        <a href="/">
                          <time dateTime="2017-5-23">June 23, 2017</time>
                        </a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fas fa-comments"></i>{" "}
                        <a href="/">0 Comments</a>
                      </li>
                    </ul>
                  </div>

                  <div className="entry-content">
                    <p>
                      Job interviews can be intimidating for anyone, especially
                      if you have a criminal record. You have to deal with the
                      feeling of being judged, the possibility of your record
                      affecting your chances, and more. In this lesson, we’ll go
                      over certain steps you can take to improve your chances of
                      nailing your interview, including what to say about your
                      record and how to bring it up.
                    </p>
                    <div className="read-more">
                      <a
                        target="_blank"
                        href="https://edu.gcfglobal.org/en/jobsearchandnetworking/interviewing-for-a-job-with-a-criminal-record/1/"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </article>

                {/*    <!-- End blog entry -->*/}

                <div className="blog-pagination">
                  <ul className="justify-content-center">
                    <li className="active">
                      <a href="/">1</a>
                    </li>
                    <li>
                      <a href="/">2</a>
                    </li>
                    <li>
                      <a href="/">3</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*  <!-- End blog entries list -->*/}

              <div className="col-lg-4">
                <div className="sidebar mt-5">
                  <h3 className="sidebar-title">Search</h3>
                  <div className="sidebar-item search-form">
                    <form action="">
                      <input type="text" />
                      <button type="submit">
                        <i class="fas fa-search"></i>
                      </button>
                    </form>
                  </div>

                  {/*  <!-- End sidebar search formn-->*/}

                  <h3 className="sidebar-title">Categories</h3>
                  <div className="sidebar-item categories">
                    <ul>
                      <li>
                        <a href="/">
                          General <span>(25)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Lifestyle <span>(12)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Travel <span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Design <span>(22)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Creative <span>(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          Educaion <span>(14)</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/*  <!-- End sidebar categories-->*/}

                  <h3 className="sidebar-title">Recent Posts</h3>
                  <div className="sidebar-item recent-posts">
                    <div className="post-item clearfix">
                      <img src={flex1} alt="" />
                      <h4>
                        <a href="https://www.flexjobs.com/blog/post/using-flexjobs-keyword-search">How to Use FlexJobs’ Keyword Search</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>

                    <div className="post-item clearfix">
                      <img src={survy} alt="" />
                      <h4>
                        <a href="https://www.flexjobs.com/blog/post/men-women-experience-remote-work-survey">Survey: Men & Women Experience Remote Work Differently</a>
                      </h4>
                      <time dateTime="2021-05-01">May 12, 2021</time>
                    </div>

                    <div className="post-item clearfix">
                      <img src={buzze} alt="" />
                      <h4>
                        <a href="https://www.flexjobs.com/blog/post/bridge-jobs-from-home">
                        Bridge Jobs You Can Do From Home
                        </a>
                      </h4>
                      <time dateTime="2021-05-01">May 4, 2021</time>
                    </div>

                    <div className="post-item clearfix">
                      <img src={bridg} alt="" />
                      <h4>
                        <a href="https://www.flexjobs.com/blog/post/what-is-a-bridge-job">What Is a Bridge Job? Pros and Cons</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>

                    <div className="post-item clearfix">
                      <img src={moving} alt="" />
                      <h4>
                        <a href="https://www.flexjobs.com/blog/post/remote-work-and-real-estate-trends">Where Are People Moving? Remote Work and Real Estate Trends</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                    <div className="post-item clearfix">
                      <img src={company25} alt="" />
                      <h4>
                        <a href="https://www.flexjobs.com/blog/post/companies-hiring-remote-work-from-home-job">25 Companies Hiring for Remote Work-From-Home Jobs Right Now</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                    <div className="post-item clearfix">
                      <img src={company30} alt="" />
                      <h4>
                        <a href="/">30 Companies Hiring for Part-Time, Remote Work-From-Home Jobs</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                    <div className="post-item clearfix">
                      <img src={company23} alt="" />
                      <h4>
                        <a href="/">23 Companies That Hire for Hybrid Remote Jobs</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                    <div className="post-item clearfix">
                      <img src={blog} alt="" />
                      <h4>
                        <a href="/">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                    <div className="post-item clearfix">
                      <img src={blog} alt="" />
                      <h4>
                        <a href="/">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                    <div className="post-item clearfix">
                      <img src={blog} alt="" />
                      <h4>
                        <a href="/">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                    <div className="post-item clearfix">
                      <img src={blog} alt="" />
                      <h4>
                        <a href="/">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                    <div className="post-item clearfix">
                      <img src={blog} alt="" />
                      <h4>
                        <a href="/">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                    <div className="post-item clearfix">
                      <img src={blog} alt="" />
                      <h4>
                        <a href="/">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                    <div className="post-item clearfix">
                      <img src={blog} alt="" />
                      <h4>
                        <a href="/">Et dolores corrupti quae illo quod dolor</a>
                      </h4>
                      <time dateTime="2021-05-01">May 1, 2021</time>
                    </div>
                  </div>

                  {/* <!-- End sidebar recent posts--> */}

                  <h3 className="sidebar-title">Tags</h3>
                  <div className="sidebar-item tags">
                    <ul>
                      <li>
                        <a href="/">App</a>
                      </li>
                      <li>
                        <a href="/">IT</a>
                      </li>
                      <li>
                        <a href="/">Business</a>
                      </li>
                      <li>
                        <a href="/">Software</a>
                      </li>
                      <li>
                        <a href="/">Design</a>
                      </li>
                      <li>
                        <a href="/">Accounting</a>
                      </li>
                      <li>
                        <a href="/">Legal</a>
                      </li>
                      <li>
                        <a href="/">Android</a>
                      </li>
                      <li>
                        <a href="/">DevOps</a>
                      </li>
                      <li>
                        <a href="/">Front-End</a>
                      </li>
                      <li>
                        <a href="/">Back-End</a>
                      </li>
                    </ul>
                  </div>

                  {/*  <!-- End sidebar tags--> */}
                </div>

                {/*  <!-- End sidebar -->*/}
              </div>
              {/*  <!-- End blog sidebar -->*/}
            </div>
          </div>
        </section>
        {/*  <!-- End Blog Section -->*/}
      </div>
    );
  }
}

export default Blogs;

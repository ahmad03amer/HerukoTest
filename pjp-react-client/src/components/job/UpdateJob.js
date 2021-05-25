import React, { Component } from 'react'
import { getJob, addJob } from '../../actions/jobActions';// 1 first thing after get data from api in the actions
import PropTypes from 'prop-types';//2
import { connect } from 'react-redux';//3
import classnames from 'classnames';//4
import "../Page_Css/AddJob.css";
import logo from "../../picture/Moh.svg";
class UpdateJob extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            title: "",
            jobIdentifier: "",
            description: "",
            email: "",
            location: "",
            type: "",
            endDate: "",
            salary: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) { //if there are any errors
            this.setState({ errors: nextProps.errors })
        }
        const {
            id,
            title,
            jobIdentifier,
            description,
            email,
            location,
            type,
            endDate,
            salary
        } = nextProps.job;

        this.setState({
            id,
            title,
            jobIdentifier,
            description,
            email,
            location,
            type,
            endDate,
            salary
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getJob(id, this.props.history);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();

        const updateJob = {
            id: this.state.id,
            title: this.state.title,
            jobIdentifier: this.state.jobIdentifier,
            description: this.state.description,
            email: this.state.email,
            location: this.state.location,
            type: this.state.type,
            endDate: this.state.endDate,
            salary: this.state.salary
        };

        this.props.addJob(updateJob, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
 <form onSubmit={this.onSubmit}>
        <div className="container addjob">
          <div className="row">
            <div className="col-md-3 addjob-left">
              <img src={logo}  alt="" />
              <h3>Welcome</h3>
              <p>
                Before Update your job Please Read the Terms & polices for Access Jobs
                website{" "}
              </p>
             
              <input type="submit" name="" value="Polices" />
              <br />
            </div>
            <div className="col-md-9 addjob-right">
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="/"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                  All Jobs 
                  </a>
                </li>
              </ul>


              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  
                  <h3 className="addjob-heading "> Update your job </h3>
                  <div className="row addjob-form">
                    <div className="col-md-12">
                      {/*  <!-- Notice -->*/}
                      <div className="notification notice closeable ">
                        <p>
                          <span>Update the job?</span> If you need to update
                          the job, please be more specific for your choices to 
                          have a full information to your job.    
                        </p>
                      </div>
                     
                      <div className="form-group">
                        <h5>Job Title</h5>
                        <input
                          type="text"
                          className={classnames('form-control form-control-lg',{
                            //change the class css when error occur in the property
                            "is-invalid": errors.title,
        
                          })}
                          placeholder="Job Title"
                          name="title"
                          required="1"
                          floatlabelstyle="1"
                          value={this.state.title}
                          onChange={this.onChange}
                        />
                         {errors.title && ( //expression like an if statement
                          <div className="invalid-feedback">{errors.title}</div>
                            )}
                      </div>


                      


                      <div className="form-group">
                        <h5>Your Email</h5>
                        <input
                          type="email"
                          className={classnames("form-control form-control-lg mb-5 ", {
                            "is-invalid": errors.email,
                          })}
                          placeholder="mail@example.com"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                        {errors.email && ( //expression like an if statement
                         <div className="invalid-feedback">{errors.email}</div>
                            )}
                      </div>

                      <div className="form-group">
                        <h5>
                          Location <span>(optional)</span>
                        </h5>
                        <input
                          type="text"
                          className={classnames("form-control form-control-lg ", {
                            "is-invalid": errors.location,
                          })}
                          placeholder="Location"
                          name="location"
                          value={this.state.location}
                          onChange={this.onChange}
                        />
                         {errors.location && ( //expression like an if statement
                    <div className="invalid-feedback">{errors.location}</div>
                           )} 
                      </div>

                  {/*<input
                    type="text"
                    className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.type,
                    })}
                    placeholder="Job Type"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChange}
                  />
                  {errors.type && ( //expression like an if statement
                    <div className="invalid-feedback">{errors.type}</div>
                  )} */}






                      <div className="form-group">
                        <h5>Job Type</h5>
                        <select className={classnames("form-control form-control-lg ", {
                      "is-invalid": errors.type,
                             })}
                             name="type"
                            value={this.state.type}
                            onChange={this.onChange}
                    >
                       {errors.type && ( //expression like an if statement
                    <div className="invalid-feedback">{errors.type}</div>
                  )}
                          <option className="hidden" selected disabled>
                            Please select Type of job
                          </option>
                          <option>Full-Time</option>
                          <option>Part-Time </option>
                          <option>Contract</option>
                        </select>
                      </div>



                      <div className="form-group">
                        <h5>Category</h5>
                        <select
                          data-placeholder="Choose Categories"
                          className="form-control form-control-lg"
                        >
                          <option value="1">Web Developers</option>
                          <option value="2">Mobile Developers</option>
                          <option value="3">Designers & Creatives</option>
                          <option value="4">Writers</option>
                          <option value="5">Legal </option>
                          <option value="6">Accounting </option>
                          <option value="7">Sales & Marketing Experts</option>
                          
                        </select>
                      </div>




                      <div className="form-group">
                        <h5>
                          Job Tags <span>(optional)</span>
                        </h5>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="e.g. PHP, Social Media, Management"
                        />
                        <p className="note">
                          Comma separate tags, such as required skills or
                          technologies, for this job.
                        </p>
                      </div>



                     
                      <h5>Description</h5>
                      <div className="form-group">
                        <textarea
                          className={classnames("form-control form-control-lg ", {
                            "is-invalid": errors.description,
                          })}
                          cols="40"
                          rows="3"
                          id="summary"
                          spellcheck="true"
                          placeholder="Job Description"
                          name="description"
                          value={this.state.description}
                          onChange={this.onChange}
                        ></textarea>
                        {errors.description && ( //expression like an if statement
                          <div className="invalid-feedback">{errors.description}</div>
                        )}
                      </div>


                      <div className="form-group">
                        <h5>Place of Job </h5>
                        <select className="form-control form-control-lg">
                          <option className="hidden" selected disabled>
                            Please select place of job
                          </option>
                          <option>Remote</option>
                          <option>In Office </option>
                        </select>
                      </div>

  

                        <div className="form-group">
                        <h5>Salary </h5>
                        <input
                          type="text"
                          className={classnames("form-control form-control-lg ", {
                            "is-invalid": errors.salary,
                          })}
                          placeholder="Salary"
                          name="salary"
                          value={this.state.salary}
                          onChange={this.onChange}
                        />
                        {errors.salary && ( //expression like an if statement
                          <div className="invalid-feedback">{errors.salary}</div>
                          )}
                        </div>

                        <div className="form-group">
                        <h5>Priority of job </h5>
                        <input
                          type="text"
                          className={classnames("form-control form-control-lg ", {
                            "is-invalid": errors.jobIdentifier,
                          })}
                          placeholder="@Low,Mid,High job"
                          name="jobIdentifier"
                          value={this.state.jobIdentifier}
                          onChange={this.onChange}
                        />
                        {errors.jobIdentifier && ( //expression like an if statement
                          <div className="invalid-feedback">{errors.jobIdentifier}</div>
                          )}
                        </div>

                      <div className="form-group">
                        <h5>Closing Date</h5>
                        <input
                          type="date"
                          name="End Date"
                          className={classnames("form-control form-control-lg ", {
                            "is-invalid": errors.endDate,
                          })}
                          placeholder="End Date"
                          name="endDate"
                          value={this.state.endDate}
                          onChange={this.onChange}
                        />
                        {errors.endDate && ( //expression like an if statement
                         <div className="invalid-feedback">{errors.endDate}</div>
                          )}
                        <p className="note">Deadline for new applicants.</p>
                      </div>

                      <div className="divider">
                        <h3>Company Details</h3>
                      </div>

                      <div className="form-group">
                        <h5>Company Name</h5>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter the name of the company"
                        />
                      </div>

                      <div className="form-group">
                        <h5>
                          Website For Company <span>(optional)</span>
                        </h5>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="http://"
                        />
                      </div>

                      <div className="form-group">
                        <h5>
                          Job Link <span>(optional)</span>
                        </h5>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="http://"
                        />
                      </div>

                      <div className="form-group">
                        <h5>
                          Tagline <span>(optional)</span>
                        </h5>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Briefly describe your company"
                        />
                      </div>

                      <div className="form-group">
                        <h5>
                          Video <span>(optional)</span>
                        </h5>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="A link to a video about your company"
                        />
                      </div>

                      <div className="form-group">
                        <div className="maxl">
                          <label class="radio inline  form-control-lg">
                            <input
                              type="radio"
                              name="place"
                              value="Remote"
                              checked
                            />
                            <span> Remote </span>
                          </label>
                          <label className="radio inline ml-3 form-control-lg">
                            <input
                              type="radio"
                              name="place"
                              value="In Office"
                            />
                            <span>In Office </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row ml-2">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1">Keep company confidential.</label>
                      </div>
                      <div className="row ml-2 ">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1">
                          I agree to AccessJob.com terms and privacy policy
                        </label>
                      </div>
                      <div className="divider"></div>

                      <input
                        type="submit"
                        className="btn btn-primary btn-block mt-4 mb-4 ml-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>
        </div>
        )
    }
}

UpdateJob.propTypes = {
    getJob: PropTypes.func.isRequired,
    job: PropTypes.object.isRequired,
    addJob: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    job: state.job.job,
    errors: state.errors
})
export default connect(mapStateToProps, { getJob, addJob })(UpdateJob);
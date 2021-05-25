import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getJob, addJob } from '../../actions/jobActions';// 1 first thing after get data from api in the actions
import PropTypes from 'prop-types';//2
import { connect } from 'react-redux';//3
import classnames from 'classnames';//4
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import logo from "../../picture/foorter.svg";
import '../Page_Css/JobBoard.css';
class JobBoard extends Component {

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


    render() {
        const { id } = this.props.match.params;
        const { errors } = this.state;

        return (
            <div className="container mt-4 mb-4">
               
               {/* 
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Card className="text-center">
                            <Card.Header>{this.state.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>{this.state.title}</Card.Title>
                                <Card.Text>
                                    {this.state.description}
                                </Card.Text>
                                <Card.Text>
                                    {this.state.email}
                                </Card.Text>
                                <Card.Text>
                                    {this.state.location}
                                </Card.Text>
                                <Button variant="primary">Malak </Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">{this.state.date}</Card.Footer>
                        </Card>
                    </div>
                </div>
                    */}
        <section className="job-browse section mt-4">
        <div className="container-jobbord">
          
            <div className="col-md-10 col-sm-8">
              <div className="job-list">
                <div className="thumb">
                <a href="/"><img src={logo} alt="logo" style={{ width: '100px', height:'150px'}}/></a>
                </div>
                <div className="job-list-content">
                  <h3><a href="/">{this.state.title}</a><span className="full-time">{this.state.type}</span>
                  <span className="salary ml-5">salary {this.state.salary}</span></h3>
                  <p> {this.state.description}
                  </p>
                  <div className="job-tag">
                    <div className="pull-left">
                      <div className="meta-tag">
                        <span><i className="fas fa-bring-front"></i>{this.state.email}</span>
                        <span><i className="fas fa-location-arrow"></i>{this.state.location}</span>
                        <span><i className="fas fa-business-time"></i>{this.state.date}date18/12/2021</span>
                      </div>
                    </div>
                    <div className="pull-right">
                      <div className="icon">
                      <i class="fas fa-heart"></i>
                      </div>
                      <div className="btn btn-common btn-rm">More Detail</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
              <div className="col-md-12 col-md-12">
             
              <aside>
              
                <div className="sidebar">
                  <div className="inner-box">
                    <h3>Categories</h3>
                    <ul className="cat-list">
                      <li>
                        <a href="/">Finance <span className="num-posts">4,287 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Techonologies <span className="num-posts">4,256 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Art/Design<span className="num-posts">3,245 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Science <span className="num-posts">4,256 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Education Training <span className="num-posts">4,560 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="//">Logistics <span className="num-posts">3,256 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Food Services <span className="num-posts">1,256 Jobs</span></a>                   
                      </li>
                    </ul>
                  </div>
                  <div className="inner-box">
                    <h3>Job Status</h3>
                    <ul className="cat-list">
                      <li>
                        <a href="/">Full Time <span className="num-posts">12,256 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Part Time <span className="num-posts">6,510 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Freelancer <span className="num-posts">1,171 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Internship <span className="num-posts">876 Jobs</span></a>                    
                      </li>
                    </ul>
                  </div>
                  <div className="inner-box">
                    <h3>Locations</h3>
                    <ul className="cat-list">
                      <li>
                        <a href="/">New York <span className="num-posts">4,197 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">San Francisco <span className="num-posts">2,256 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">San Diego <span className="num-posts">3,278 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Los Angeles <span className="num-posts">5,294 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Chicago <span className="num-posts">1,746 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">Houston <span className="num-posts">871 Jobs</span></a>                    
                      </li>
                      <li>
                        <a href="/">New Orleans <span className="num-posts">2,163 Jobs</span></a>                   
                      </li>
                    </ul>
                  </div>
                </div>
                
              </aside>
              </div>
            </div>



            </div>
         
        </div>
      </section>

            </div>

        );
    }
}

JobBoard.propTypes = {
    getJob: PropTypes.func.isRequired,
    job: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    job: state.job.job,
    errors: state.errors
})
export default connect(mapStateToProps, { getJob })(JobBoard);
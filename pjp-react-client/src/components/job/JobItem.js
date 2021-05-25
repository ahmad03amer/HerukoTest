import React, { Component } from "react";
import { Link } from "react-router-dom";
//after did DELETE_JOB now we need to active the button 
import PropTypes from "prop-types"; //1
import { connect } from "react-redux";//2
import { deleteJob } from "../../actions/jobActions";

class JobItem extends Component {

  //7
  onDeleteClick = id => {
    this.props.deleteJob(id);
  };

  render() {

    const { job } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{job.id}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>{job.salary}</p> 
             
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <Link to={`/jobBoard/${job.jobIdentifier}`}>
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1">Job Board </i>
                  </li>
                </Link>
                {
                  //this is the way to get an id in the components elements
                }
                <Link to={`/updateJob/${job.jobIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">Update Job Info</i>
                  </li>
                </Link>

                <li className="list-group-item delete"
                  onClick={
                    this.onDeleteClick.bind(this, job.jobIdentifier)}>
                  <i className="fa fa-minus-circle pr-1">Delete Job</i>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//6
JobItem.propTypes = {
  deleteJob: PropTypes.func.isRequired
};



//5
export default connect(null, { deleteJob })(JobItem);

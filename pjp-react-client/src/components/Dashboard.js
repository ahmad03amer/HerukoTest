import React, { Component } from "react";
import AddJobButton from "./job/AddJobButton";
import JobItem from "./job/JobItem";
import { connect } from "react-redux";
import { getJobs } from "../actions/jobActions";
import JobBoard from "./job/JobBoard";
import PropTypes from "prop-types";


class Dashboard extends Component {

  //different life cycle hooks
  componentDidMount() {
    this.props.getJobs();
  }

  render() {

    //es6 expression
    const { jobs } = this.props.job;
    return (
      <div className="jobs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Jobs</h1>
              <br />
              <AddJobButton />
              <br />
              <hr />
            </div>
          </div>
        </div>

        {
          jobs.map(job => (

            <JobItem key={job.id} job={job} />
          ))
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  job: PropTypes.object.isRequired,
  getJobs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  job: state.job, //from reducers/index.js (combine reducers)
})
//connect the component with the store
export default connect(mapStateToProps, { getJobs })(Dashboard);

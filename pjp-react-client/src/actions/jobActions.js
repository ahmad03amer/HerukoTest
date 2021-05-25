
import axios from "axios";
import { GET_ERRORS, GET_JOBS, GET_JOB, DELETE_JOB } from "./types";

export const addJob = (job, history) => async dispatch => {
  try {
    const res = await axios.post("/api/job", job);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};


export const getJobs = () => async dispatch => {//4
  const jobs = await axios.get("/api/job/allUserJobs");
  dispatch({
    type: GET_JOBS,
    payload: jobs.data
  })
}

//if we have any errors we will redirect to dashboard using history
export const getJob = (id, history) => async dispatch => {
  try {
    //the same id getting from route in App.js
    const res = await axios.get(`/api/job/${id}`)
    dispatch({
      type: GET_JOB,
      payload: res.data
    })
  } catch (error) {
    history.push("/dashboard")//if try to access non exist object
  }

}

export const deleteJob = id => async dispatch => {
  if (window.confirm("Are you sure you want to delete the job")) {

    await axios.delete(`/api/job/${id}`);

    dispatch({
      type: DELETE_JOB,
      payload: id
    })
  }

}
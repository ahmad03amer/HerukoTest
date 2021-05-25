import { GET_JOB, GET_JOBS, DELETE_JOB } from '../actions/types'; //2
//stup the initial state
const initialState = {
    jobs: [],
    job: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_JOBS://the case get projects return the state and load the project with payload from server
            return {
                ...state,
                jobs: action.payload
            };

        case GET_JOB:
            return {
                ...state,
                job: action.payload //return the payload from server when actions occures
            };

        case DELETE_JOB:
            return {
                ...state,
                jobs: state.jobs.filter(
                    job => job.jobIdentifier !== action.payload
                )//return the entire list without the deleted job without refeesh the page
            };
        default:
            return state;
    }
}
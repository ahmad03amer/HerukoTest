
import { GET_ERRORS } from "../actions/types";

//the initial state of the error state is empty
//so in the inspect element in redux we saw empty errors array in the state
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;

    default:
      return state;
  }
}
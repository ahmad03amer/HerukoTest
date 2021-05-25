import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//first thing in the store is the initial state
const initialState = {};

//second the middleware
const middleware = [thunk];

let store;

//to let the app run on any computer if doesnt have the react extensions
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
//if the user open from chrome browser
if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  //create store parameters are reducer ,initial state and middleware _-_ ... means array es6 syntax
  store = createStore(
    rootReducer,
    initialState, //press inspect element then in redux , instrutions
    compose(
      applyMiddleware(...middleware),
      ReactReduxDevTools
    )
  );
} else {
  store = createStore(
    rootReducer,
    initialState, //press inspect element then in redux , instrutions
    compose(applyMiddleware(...middleware))
  );
}

export default store;

import {
  createStore,
  applyMiddleware
} from "redux";
import {createLogger} from "redux-logger";

import rootReducer from "data/reducer";


const logger = createLogger({
  predicate: true,
  collapsed: true,
  duration: true
});

const middleware = [logger];


const store = applyMiddleware(...middleware)(createStore)(rootReducer);

export default store;


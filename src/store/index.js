import { applyMiddleware, createStore } from 'redux';

// Logger with default options
import reducer from '../reducers';
import logger from 'redux-logger';

const store = createStore(
  reducer,
  applyMiddleware(logger)
)


export default store;
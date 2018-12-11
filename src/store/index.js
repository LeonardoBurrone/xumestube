import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, logger];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(reducers, enhancer);

export default store;
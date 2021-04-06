import { combineReducers, createStore, compose } from 'redux';
import todos from './todo/reducer';

const rootReducer = combineReducers({ todos });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mdl = composeEnhancers();
const store = createStore(rootReducer, mdl);

export { store };

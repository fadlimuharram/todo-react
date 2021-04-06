<<<<<<< HEAD
import { combineReducers, createStore } from 'redux';
=======
import { combineReducers, createStore, compose } from 'redux';
>>>>>>> 8a2ae96 (init)
import todos from './todo/reducer';

const rootReducer = combineReducers({ todos });

<<<<<<< HEAD
const store = createStore(rootReducer);
=======
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const mdl = composeEnhancers();
const store = createStore(rootReducer, mdl);
>>>>>>> 8a2ae96 (init)

export { store };

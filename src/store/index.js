/* eslint-disable no-console */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import user from './user/reducer';
import courses from './courses/reducer';
import authors from './authors/reducer';

const saveState = (state) => {
  try {
    const serialiseState = JSON.stringify(state);
    window.localStorage.setItem('app_state', serialiseState);
  } catch (err) {
    console.log(new Error(err));
  }
};

const loadState = () => {
  try {
    const serialiseState = window.localStorage.getItem('app_state');
    if (!serialiseState) return undefined;

    return JSON.parse(serialiseState);
  } catch (err) {
    return undefined;
  }
};

const reducers = combineReducers({
  user,
  courses,
  authors,
});

const oldState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  oldState,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

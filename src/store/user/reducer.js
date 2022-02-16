/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable default-param-last */
import API from 'services/index';
import { errorHandler } from '../../services/errorHandles';
import { fetchAllAuthors, removeAuthors } from '../authors/reducer';
import { fetchAllCourses, removeCourses } from '../courses/reducer';
import actions from './actionCreator';
import { REMOVE_USER, SET_USER } from './actionTypes';

const userInitialState = {
  isAuth: false,
  name: '',
  email: '',
  token: '',
  role: '',
};

export default function appReducer(state = userInitialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload, isAuth: true };

    case REMOVE_USER:
      return {
        name: '', email: '', token: '', role: '', isAuth: false,
      };

    default:
      return state;
  }
}

export const logout = () => async (dispatch) => {
  dispatch(removeCourses);
  dispatch(removeAuthors);
  await API.logout(localStorage.getItem('token'));
  localStorage.removeItem('token');
  dispatch(actions.removeUser());
  localStorage.removeItem('app_state');
};

const validateAndSetData = (courses, authors, dispatch, user) => {
  if (courses && authors) {
    dispatch(actions.setUser(user));
    dispatch(fetchAllAuthors());
    dispatch(fetchAllCourses());
  }
};

export function authorization(user) {
  return async function (dispatch, getState) {
    let response;
    const state = getState();
    try {
      response = await API.authorization(user).then((res) => {
        localStorage.setItem('token', res.data.result);
        return API.getRole(res.data.result);
      })
    } catch (err) {
        errorHandler({message: err.response ? err.response.data : {result: ""}, code: err.response || 500})
      return { successful: false };
    }
    validateAndSetData(
      !state.courses.length,
      !state.authors.length,
      dispatch,
      response.result,
    );

    return response;
  };
}

export function sendRegistrationData(user) {
  return async function () {
  let response;
  try {
    response = await API.registration({
      name: user.name.trim(),
      email: user.email.trim(),
      password: user.password.trim(),
    })
    return response.data;
  } catch (err) {
    errorHandler({message: {result:  err.response ?  err.response.data.errors[0] :  ""} , code: err.response || 500})

    return { successful: false };
  }
}
};

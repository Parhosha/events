/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import API from 'services/index';
import { errorHandler } from '../../services/errorHandles';
import actions from './actionCreator';
import {
  REMOVE_COURSES,
  REMOVE_COURSE,
  SET_COURSES,
  ADD_COURSE,
  UPDATE_COURSE,
} from './actionTypes';

export const coursesInitialState = [];

export default function courseReducer(state = coursesInitialState, action) {
  switch (action.type) {
    case SET_COURSES: {
      return [...state, ...action.payload];
    }
    case REMOVE_COURSE:
      const newCoursesList = state.filter(
        (course) => course.id !== action.payload.id,
      );
      return newCoursesList;
    case ADD_COURSE:
      return [...state, action.payload];

    case UPDATE_COURSE: {
      const prevState = state.filter(
        (course) => course.id !== action.payload.id,
      );
      return [...prevState, action.payload];
    }
    case REMOVE_COURSES:
      return [];

    default:
      return state;
  }
}

export function fetchAllCourses() {
  return async function (dispatch) {
    let response;
    try {
      response = await API.getAllCourses();
      dispatch(actions.setCourses(response.data.result));
      
    } catch (err) {
      errorHandler(err)
    }
  };
}

export function addCourse(course) {
  return async function (dispatch) {
    let response;
    try {
      response = await API.addCourse(course, localStorage.getItem('token'));
      dispatch(actions.addCourse(response.result));

    } catch (err) {
      errorHandler(err)
    }
  };
}

export function updateCourse(course) {
  return async function (dispatch) {
    let response;
    try {
      response = await API.updateCourse(course, localStorage.getItem('token'));
    } catch (err) {
      errorHandler({message: {result:  ""} , code: 1})
    }
    dispatch(actions.updateCourse(response.result));
    return response;
  };
}
export function removeCourse(id) {
  return async function (dispatch) {
    let response;
    try {
      response = await API.deleteCourse(id, localStorage.getItem('token'));
    } catch (err) {
      errorHandler({message: {result:  ""} , code: 1})
    }
    if (response.successful) dispatch(actions.removeCourse(id));
  };
}

export function removeCourses(dispatch) {
  dispatch(actions.removeCourses());
}

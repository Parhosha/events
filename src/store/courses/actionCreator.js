import {
  ADD_COURSE,
  REMOVE_COURSE,
  REMOVE_COURSES,
  SET_COURSES,
  UPDATE_COURSE,
} from './actionTypes';

const actions = {
  setCourses: (course) => ({ type: SET_COURSES, payload: course }),
  addCourse: (course) => ({ type: ADD_COURSE, payload: course }),
  updateCourse: (course) => ({ type: UPDATE_COURSE, payload: course }),
  removeCourse: (id) => ({ type: REMOVE_COURSE, payload: { id } }),
  removeCourses: () => ({ type: REMOVE_COURSES }),
};

export default actions;

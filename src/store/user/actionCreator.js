import { REMOVE_USER, SET_ERROR, SET_USER } from './actionTypes';

const actions = {
  setUser: (data) => ({ type: SET_USER, payload: { ...data } }),
  setError: (data) => ({ type: SET_ERROR, payload: { ...data } }),
  removeUser: () => ({ type: REMOVE_USER }),
};

export default actions;

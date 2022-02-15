import { ADD_AUTHOR, REMOVE_AUTHORS, SET_AUTHORS } from './actionTypes';

const actions = {
  setAuthors: (data) => ({ type: SET_AUTHORS, payload: data }),
  addAuthor: (author) => ({ type: ADD_AUTHOR, payload: author }),
  removeAuthors: () => ({ type: REMOVE_AUTHORS }),
};

export default actions;

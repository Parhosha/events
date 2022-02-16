/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-console */

import API from 'services/index';
import PropTypes from 'prop-types';
import actions from './actionCreator';
import { ADD_AUTHOR, REMOVE_AUTHORS, SET_AUTHORS } from './actionTypes';

const authorsInitialState = [];

export default function reducer(state = authorsInitialState, { payload, type } = {}) {
  switch (type) {
    case SET_AUTHORS: {
      return [...state, ...payload];
    }

    case ADD_AUTHOR:
      return [...state, payload];

    case REMOVE_AUTHORS:
      return [];

    default:
      return state;
  }
}

export function addAuthor(author) {
  return async function (dispatch) {
    let response;
    try {
      response = await API.addAuthor(author, localStorage.getItem('token'));
    } catch (err) {
      errorHandler({message: {result:  ""} , code: 1})
      return;
    }
    dispatch(actions.addAuthor(response.result));
    return response.result;
  };
}

export function removeAuthors(dispatch) {
  dispatch(actions.removeAuthors());
}

export function fetchAllAuthors() {
  return async function (dispatch) {
    let response;
    try {
      response = await API.getAllAuthors();
    } catch (err) {
      errorHandler({message: {result:  ""} , code: 1})
    }
    dispatch(actions.setAuthors(response.result));
  };
}

export const authorsListTypes = {
  all: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  })),
  selected: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  })),
};

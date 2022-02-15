/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from 'Header';

const mockedState = {
  user: {
    isAuth: true,
    name: 'test',
  },
  courses: [],
  authors: [],
};
const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

test('header component test', () => {
  render(
    <Provider store={mockedStore}>
      <Router>
        <Header />
      </Router>
    </Provider>,
    container,
  );

  expect(screen.getByText('test')).toBeInTheDocument();
  expect(screen.getByTitle('Logo'));
});

/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Courses from 'Courses';

let container = document.createElement('div');

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

export default function setup(mockedState) {
  const mockedStore = {
    getState: () => mockedState,
    subscribe: jest.fn(),
    dispatch: jest.fn(),
  };

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn().mockReturnValue({
      length: 5,
      action: 'PUSH',
      location: {
        pathname: '/courses',
        search: '',
        hash: '',
        key: '3mw6kf',
      },
      push: jest.fn(),
    }),
  }));

  ReactDOM.render(
    <Provider store={mockedStore}>
      <Router>
        <Courses />
      </Router>
    </Provider>,
    container,
  );
}

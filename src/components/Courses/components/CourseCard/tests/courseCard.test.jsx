/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter as Router } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { act, create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import mockedCoursesList from '../constants/mockedCoursesList';
import mockedAuthorsList from '../constants/mockedAuthorsList';
import {
  mockedStore,
  setup, title, duration, creationDate,
} from './setup';
import '@testing-library/jest-dom/extend-expect';
import CourseCard from 'CourseCard';

import courseDuration from '../helpers/pipeDuration';

const validateDuration = duration > 0 ? `${courseDuration(duration)} hours` : ' 00:00 hours';

it('test CourseCard component', async () => {
  setup();
  expect(screen.getByText(title));
  expect(screen.getAllByTestId('courseDescription'));
  expect(screen.getByText(validateDuration));
  expect(screen.findAllByTestId('courseAuthor'));
  expect(
    creationDate.match(
      /^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\d{4}$/,
    ),
  ).not.toBeNull();
});

it('test courseCard with Snapshot', () => {
  let root;
  act(() => {
    root = create(
      <Provider store={mockedStore}>
        <Router>
          <CourseCard
            {...mockedCoursesList[0]}
            authors={mockedAuthorsList}
            authorsId={mockedCoursesList[0].authors}
            handleRemove={() => {}}
          />
        </Router>
      </Provider>,

    );
  });
  expect(root.toJSON()).toMatchSnapshot();
});

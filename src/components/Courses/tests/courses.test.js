/* eslint-disable no-undef */
import '@testing-library/jest-dom/extend-expect';
import { screen, fireEvent } from '@testing-library/react';
import setup from './setup';
import mockedAuthorsList from '../constants/mockedAuthorsList';
import mockedCoursesList from '../constants/mockedCoursesList';

let mockedState = {
  user: {
    isAuth: true,
    name: 'Test Name',
  },
  courses: mockedCoursesList,
  authors: mockedAuthorsList,
};

it('should display amount of CourseCard equal length of courses array', async () => {
  const coursesCount = mockedState.courses.length;
  setup(mockedState);

  expect(screen.getAllByTestId('course').length).toBe(coursesCount);
});

it('should display Empty container if courses array length is 0', async () => {
  mockedState = { ...mockedState, courses: [] };
  setup(mockedState);

  expect(screen.getAllByTestId('coursesContainer'));
});

it('CourseForm should be showed after a click on a button "Add new course".', () => {
  mockedState = {
    ...mockedState,
    courses: [],
    user: { ...mockedState, role: 'admin' },
  };
  setup(mockedState);
  fireEvent.click(screen.getByText('Add new course'));
});

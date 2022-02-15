/* eslint-disable no-undef */
import { screen } from '@testing-library/react';
import { getAuthorsList } from '../helpers/Utils';
import mockedAuthorsList from '../constants/mockedAuthorsList';
import mockedCoursesList from '../constants/mockedCoursesList';
import render from './render';

const mockedState = {
  user: {
    isAuth: true,
    name: 'Test Name',
  },
  courses: mockedCoursesList,
  authors: mockedAuthorsList,
};

const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

it('test CourseForm component', async () => {
  render(mockedStore);

  const authors = getAuthorsList(
    mockedState.authors,
    mockedState.courses[0].authors,
  );

  authors.all.map((author) => expect(screen.getByText(author.name)).toBeInTheDocument());
  authors.selected.map((author) => expect(screen.getByText(author.name)).toBeInTheDocument());
});

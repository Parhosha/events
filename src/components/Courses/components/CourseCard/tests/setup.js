/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import CourseCard from 'CourseCard';
import mockedCoursesList from '../../../constants/mockedCoursesList';
import mockedAuthorsList from '../../../constants/mockedAuthorsList';

const mockedState = {
  user: {
    isAuth: true,
    name: 'Test Name',
  },
  courses: mockedCoursesList,
  authors: mockedAuthorsList,
};
export const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

export const {
  id, title, description, creationDate, duration, authors,
} = mockedStore.getState().courses[0];

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

export const setup = () => {
  const authorsName = mockedStore.getState().authors;
  const handleRemove = jest.fn(() => console.log('removed'));

  ReactDOM.render(
    <Provider store={mockedStore}>
      <Router>
        <CourseCard
          id={id}
          title={title}
          description={description}
          creationDate={creationDate}
          duration={duration}
          authors={authorsName}
          authorsId={authors}
          handleRemove={handleRemove}
        />
      </Router>
    </Provider>,
    container,
  );
  return container;
};

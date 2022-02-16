/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter as Router } from 'react-router-dom';
import { act, create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import CourseCard from 'CourseCard';
import mockedCoursesList from 'constants/mockedCoursesList';
import mockedAuthorsList from 'constants/mockedAuthorsList';
import { mockedStore } from './setup';

function render() {
  const res = act(() => create(
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
  ));
  return res;
}

export default render;

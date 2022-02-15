/* eslint-disable no-undef */
import courseReducer from 'courses/reducer';
import mockedCoursesList from 'constants/mockedCoursesList';
import actions from 'courses/actionCreator';

const addCourse = actions.addCourse(mockedCoursesList[0]);
const allCourses = actions.setCourses(mockedCoursesList);

describe('course reducers', () => {
  let coursesInitialState = [];
  it('test default corse reducer', () => {
    expect(courseReducer(coursesInitialState, {})).toEqual([
      ...coursesInitialState,
    ]);
  });

  it('test ALL_COURSES reducer', async () => {
    expect(courseReducer(coursesInitialState, allCourses)).toEqual([
      ...coursesInitialState,
      ...allCourses.payload,
    ]);
  });

  coursesInitialState = [...coursesInitialState, ...allCourses.payload];

  it('test SAVE_COURSE reducer', () => {
    expect(courseReducer(coursesInitialState, addCourse)).toEqual([
      ...coursesInitialState,
      addCourse.payload,
    ]);
  });
});

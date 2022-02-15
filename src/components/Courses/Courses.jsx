/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from 'common/components/wrapper/Wrapper';
import { removeCourse } from 'store/courses/reducer';
import { selectAuthors, selectCourses } from 'store/selectors';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import style from './Courses.module.sass';

export default function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const authors = useSelector(selectAuthors);
  const [state, setState] = useState([...courses]);

  const handleRemove = (id) => {
    let filteredCourses;
    if (state) {
      filteredCourses = state.filter((course) => course.id !== id);
    }
    dispatch(removeCourse(id));
    setState(filteredCourses);
  };

  useEffect(() => {
    setState([...courses]);
  }, [courses]);
  return (
    <Wrapper
      paddingSize="md"
      className={style.courses}
      testId="coursesContainer"
    >
      <SearchBar courses={courses} handleState={setState} />
      {state && state.map((el) => (
        <CourseCard
          id={el.id}
          authors={authors}
          title={el.title}
          description={el.description}
          creationDate={el.creationDate}
          duration={el.duration}
          authorsId={el.authors}
          key={el.id}
          handleRemove={handleRemove}
        />
      ))}
      {!courses && <div className={style.notFoundCourse}>Add course</div>}
      {!state.length && (
      <div className={style.notFoundCourse}>Course doesn't exist</div>
      )}
    </Wrapper>
  );
}

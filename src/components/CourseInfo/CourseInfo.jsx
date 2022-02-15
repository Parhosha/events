import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Wrapper from 'common/components/wrapper/Wrapper';
import courseDuration from 'helpers/pipeDuration';
import { getAuthorNames } from 'helpers/Utils';

import style from './CourseInfo.module.sass';

const selectCourses = (state) => state.courses;
const selectAuthors = (state) => state.authors;

export default function CourseInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const courses = useSelector(selectCourses);
  const authors = useSelector(selectAuthors);
  const courseInfo = courses.find((course) => course.id === id);
  let authorsList = [];

  if (!courseInfo) {
    navigate('/login');
  } else {
    authorsList = getAuthorNames(courseInfo.authors, authors);
  }

  return (
    <Wrapper paddingSize="md" className={style.courseInfo}>
      <div className={style.header}>
        <Link to="/courses">
          <p>
            {'< Back to courses'}
          </p>
        </Link>
        <h1 className={style.title}>{courseInfo.title}</h1>
      </div>

      <p className={style.description}>{courseInfo.description}</p>

      <section className={style.info}>
        <p>
          <b>ID:</b>
          {`${id.slice(0, 19)}... `}
        </p>
        <p className={style.creation}>
          <b>Created: </b>
          {courseInfo.creationDate}
        </p>
        <p className={style.duration}>
          <b>Duration: </b>
          {`${courseDuration(courseInfo.duration)} hours`}
        </p>
        <ul className={style.authors}>
          <b>Authors: </b>
          {authorsList.map((name, i) => (
            <li key={name}>
              {name}
              {authorsList[i + 1] ? ',' : ''}
            </li>
          ))}
        </ul>
      </section>
    </Wrapper>
  );
}

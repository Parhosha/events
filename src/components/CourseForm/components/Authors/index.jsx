/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAuthorsList } from 'helpers/Utils';
import Wrapper from 'common/components/wrapper/Wrapper';
import AuthorList from './components/AuthorList/AuthorList';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';

import style from './index.module.sass';

const selectAuthors = (state) => state.authors;

export function Authors({ course, handleCourse, children }) {
  const authors = useSelector(selectAuthors);
  const initState = getAuthorsList(authors, course.authors);

  const [authorsList, setAuthorsList] = useState({ ...initState });
  useEffect(() => {
    const ids = authorsList.selected.map((author) => author.id);
    handleCourse({
      ...course,
      authors: [...ids],
    });
  }, [authorsList, handleCourse]);

  return (
    <Wrapper paddingSize="sm" className={style.authorSettings}>
      <section className={style.section}>
        <CreateAuthor
          authorsList={authorsList}
          setAuthorsList={setAuthorsList}
        />
        {React.cloneElement(children, { course, handleCourse })}
      </section>

      <AuthorList authorsList={authorsList} setAuthorsList={setAuthorsList} />
    </Wrapper>
  );
}

Authors.propTypes = {};

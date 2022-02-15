import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  BUTTON_CREATE_AUTHOR,
  INPUT_NAME,
  PLACEHOLDER_NAME,
} from 'constants/elements';
import Button from 'common/components/Button/Button';
import Input from 'common/components/Input/Input';
import { addAuthor } from 'store/authors/reducer';
import { AuthorModel } from '../../../../models/index';

import style from './CreateAuthor.module.sass';
import { authorsListTypes } from '../../../../../../store/authors/reducer';

const checkExistAuthors = (authors, author) => authors.find(
  (existAuthor) => author.name === existAuthor.name,
);

export default function CreateAuthor({ setAuthorsList, authorsList }) {
  const [author, setAuthor] = useState(AuthorModel);
  const authors = useSelector((state) => state.authors);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const createAuthor = async () => {
    if (author.name) {
      if (!checkExistAuthors(authors, author, error)) {
        const newAuthor = await dispatch(addAuthor(author));
        setAuthorsList({
          ...authorsList,
          all: [...authorsList.all, newAuthor],
        });
        setError('');
        setAuthor(AuthorModel);
      } else {
        setError('author exist');
      }
    }
  };
  return (
    <div className={style.addAuthor}>
      <p>Add author</p>
      <Input
        id="name"
        className={style.authorLabel}
        value={INPUT_NAME}
        placeholder={PLACEHOLDER_NAME}
        action={setAuthor}
        state={author}
      >
        <span className={style.error}>
          {error}
        </span>
      </Input>

      <Button
        value={BUTTON_CREATE_AUTHOR}
        className={style.createAuthor}
        action={() => createAuthor()}
      />
    </div>
  );
}
CreateAuthor.propTypes = {
  setAuthorsList: PropTypes.func.isRequired,
  authorsList: PropTypes.shape(authorsListTypes),
};

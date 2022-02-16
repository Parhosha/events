import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common/commonComponents/Button/Button';
import {
  BUTTON_ADD_AUTHOR,
  BUTTON_DELATE_AUTHOR,
} from 'constants/elements';

import style from './AuthorList.module.sass';
import { authorsListTypes } from '../../../../../../store/authors/reducer';

export default function AuthorList({ setAuthorsList, authorsList }) {
  const addAuthor = (selectedAuthor) => {
    const updatedAuthors = authorsList.all.filter(
      (author) => author.id !== selectedAuthor.id,
    );
    setAuthorsList({
      ...authorsList,
      all: [...updatedAuthors],
      selected: [...authorsList.selected, selectedAuthor],
    });
  };

  const removeFromSelectedAuthors = (selectedAuthor) => {
    const removeSelected = authorsList.selected.filter(
      (author) => author.id !== selectedAuthor.id,
    );
    setAuthorsList({
      all: [...authorsList.all, selectedAuthor],
      selected: [...removeSelected],
    });
  };

  return (
    <section className={style.section}>
      <div className={style.authors}>
        <p>Authors</p>
        <ul>
          {authorsList.all.map((author) => (
            <li key={author.id}>
              {author.name}
              <Button
                value={BUTTON_ADD_AUTHOR}
                action={() => addAuthor(author)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.courseAuthors}>
        <p>Course authors</p>
        <ul>
          {authorsList.selected.map((author) => (
            <li key={author.id}>
              {author.name}
              <Button
                value={BUTTON_DELATE_AUTHOR}
                action={() => removeFromSelectedAuthors(author)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

AuthorList.propTypes = {
  setAuthorsList: PropTypes.func.isRequired,
  authorsList: PropTypes.shape(authorsListTypes).isRequired,
};

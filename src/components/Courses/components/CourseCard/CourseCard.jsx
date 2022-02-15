import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import EditIcon from 'common/images/EditIcon';
import TrashIcon from 'common/images/TrashIcon';
import Wrapper from 'common/components/wrapper/Wrapper';
import Button from 'common/components/Button/Button';
import { selectRole } from 'store/selectors';
import {
  getAuthorNames,
  getDurationString,
  getFixedDescription,
} from 'helpers/Utils';

import style from './CourseCard.module.sass';

export default function CourseCard({
  id,
  authorsId,
  title,
  description,
  creationDate,
  duration,
  authors,
  handleRemove,
}) {
  const authorNames = getAuthorNames(authors, authorsId);
  const durationString = getDurationString(duration);
  const fixedDescription = getFixedDescription(description, 350);
  const role = useSelector(selectRole);
  const navigate = useNavigate();

  return (
    <Wrapper paddingSize="md" className={style.courseCard} testId="course">
      <h3 className={style.title} data-testid="title">
        {title}
      </h3>
      <p className={style.creation}>
        <b>Created: </b>
        {' '}
        {creationDate}
      </p>
      <p className={style.duration}>
        <b>Duration: </b>
        {durationString}
      </p>
      <p className={style.description} data-testid="courseDescription">
        {fixedDescription}
      </p>
      <ul className={style.authors}>
        <b>Tutors: </b>
        {' '}
        {authorNames.map((name, i) => (
          <li key={name} data-testid="courseAuthor">
            {name}
            {' '}
            {authorNames[i + 1] ? ',' : ''}
          </li>
        ))}
      </ul>
      <div className={style.actions}>
        <Button
          value="Show course"
          className={style.showMoreBtn}
          action={() => navigate({ pathname: `/course/${id}` })}
        />
        {role === 'admin' && [
          <Button
            value={<TrashIcon />}
            className={style.delateBtn}
            action={() => handleRemove(id)}
            key="remove"
          />,
          <Button
            value={<EditIcon />}
            action={() => navigate(`/courses/update/${id}`)}
            className={style.editBtn}
            key="edit"
          />,
        ]}
      </div>
    </Wrapper>
  );
}

CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  authorsId: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  duration: PropTypes.number,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemove: PropTypes.func.isRequired,
};
CourseCard.defaultProps = {
  duration: 0,
};

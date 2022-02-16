import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'common/commonComponents/Button/Button';
import Input from 'common/commonComponents/Input/Input';
import {
  BUTTON_ADD_COURSE,
  PLACEHOLDER_SEARCH,
} from 'constants/elements';
import { selectRole } from 'store/selectors';
import searchByParametr from 'helpers/searchCourse';

import style from './SearchBar.module.sass';

export default function SearchBar({ courses, handleState }) {
  const [search, setSearch] = useState({ search: '' });
  const role = useSelector(selectRole);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    searchByParametr(search.search, handleState, courses);
    setSearch({ state: '' });
  };

  return (
    <div className={style.searchBar}>
      <form onSubmit={(e) => handleSearch(e)}>
        <Input
          state={search}
          className={style.search}
          action={setSearch}
          placeholder={PLACEHOLDER_SEARCH}
          length={0}
          id="search"
          required={false}
        >
          <Button
            className={style.searchBtn}
            value="Search"
            action={() => searchByParametr(search.search, handleState, courses)}
          />
        </Input>
      </form>
      {role === 'admin' && (
      <Button
        value={BUTTON_ADD_COURSE}
        action={() => {
          navigate('/courses/add', { replace: true });
        }}
      />
      )}
    </div>
  );
}
SearchBar.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    authors: PropTypes.arrayOf(PropTypes.string),
    creationDate: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    id: PropTypes.string,
    title: PropTypes.string,
  })),
  handleState: PropTypes.func,
};

SearchBar.defaultProps = {
  handleState: () => {},
};

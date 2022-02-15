/* eslint-disable no-restricted-globals */
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import validation from './validation';

export default function Input({
  state,
  value,
  action,
  id,
  className,
  length,
  type,
  placeholder,
  children,
  required,
  autocomplete,
}) {
  const location = useLocation();

  const ref = useRef(value);

  return (
    <label htmlFor={id} className={className}>
      {value}
      {id === 'description' ? (
        <textarea
          ref={ref}
          id="description"
          rows="5"
          cols="100"
          minLength="2"
          value={state[id]}
          onChange={(e) => validation(e, location, ref, state, id, action)}
          required
        />
      ) : (
        <>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            minLength={length}
            id={id}
            value={state[id] || ''}
            onChange={(e) => validation(e, location, ref, state, id, action)}
            required={required}
            autoComplete={autocomplete}

          />
          {children}
        </>
      )}
    </label>
  );
}

Input.propTypes = {
  state: PropTypes.shape({ id: PropTypes.string }),
  value: PropTypes.string,
  action: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  length: PropTypes.number,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  required: PropTypes.bool,
  autocomplete: PropTypes.string,

};

Input.defaultProps = {
  state: { id: 0 },
  className: '',
  value: '',
  id: '',
  length: 2,
  type: 'text',
  placeholder: '',
  children: React.createElement('div'),
  required: false,
  action: () => {},
  autocomplete: 'off',

};

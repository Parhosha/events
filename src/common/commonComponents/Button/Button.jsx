/* eslint-disable react/button-has-type */
import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import style from './Button.module.sass';

export default function Button({
  value, className, action, type, disabled,
}) {
  return (
    <button
      type={type}
      className={cn(style.button, className)}
      onClick={action}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
  action: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  // value: '',
  action: () => {},
  className: '',
  disabled: false,
};

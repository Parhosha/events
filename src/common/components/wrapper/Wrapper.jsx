import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import style from './Wrapper.module.sass';

const SIZES = {
  sm: style.sm,
  md: style.md,
  lg: style.lg,
};

export default function Wrapper({
  paddingSize, className, children, testId,
}) {
  const compoundClassName = cn(SIZES[paddingSize], className);
  return (
    <div className={compoundClassName} data-testid={testId}>
      {children}
    </div>
  );
}
Wrapper.defaultProps = {
  paddingSize: 'sm',
  testId: '',
};
Wrapper.propTypes = {
  paddingSize: PropTypes.string,
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  testId: PropTypes.string,
};

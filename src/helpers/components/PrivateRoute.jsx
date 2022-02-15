/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export default function PrivateRoute({ component: Component, ...rest }) {
  const role = useSelector((state) => state.user.role);

  return role === 'admin' ? (
    <Component {...rest} />
  ) : (
    <Navigate
      to={{
        pathname: '/courses',
        state: { from: rest.location },
      }}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.string,
};
PrivateRoute.defaultProps = {
  location: '/',
  component: () => {},
};

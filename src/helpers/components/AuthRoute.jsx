/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function AuthRoute({ component: Component, ...rest }) {
  const isAuth = useSelector((state) => state.user.isAuth);

  return isAuth ? (
    <Component {...rest} />
  ) : (
    <Navigate
      to={{
        pathname: '/login',
        state: { from: rest.location },
      }}
    />
  );
}

AuthRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.string,
};

AuthRoute.defaultProps = {
  location: '/',
  component: () => {},
};

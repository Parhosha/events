import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'common/commonComponents/Button/Button';
import Wrapper from 'common/commonComponents/wrapper/Wrapper';
import { BUTTON_LOGOUT } from 'constants/elements';
import { logout } from 'store/user/reducer';
import Logo from './headerComponents/Logo/Logo';

import style from './Header.module.sass';

const selectUser = (state) => state.user;

export default function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (user
    ? (
      <Wrapper paddingSize="md" className={style.header}>
        <Logo />
        <div className={style.headerProfile}>
          {user.isAuth && (
          <>
            <p className={style.name}>{user.name || 'Admin'}</p>
            <Button
              value={BUTTON_LOGOUT}
              className={style.hedaerBtn}
              action={handleLogout}
            />
          </>
          )}
        </div>
      </Wrapper>
    ) : 'user name'
  );
}

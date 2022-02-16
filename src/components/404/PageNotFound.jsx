import React from 'react';
import { useNavigate } from 'react-router';
import Button from 'common/commonComponents/Button/Button';
import Wrapper from 'common/commonComponents/wrapper/Wrapper';

import style from './PageNotFound.module.sass';

function PageNotFound() {
  const history = useNavigate();
  return (
    <Wrapper className={style.notFound}>
      <h1>Error 404</h1>
      <h3>Page Not Found</h3>

      <Button onClick={history.goBack}> Go back </Button>
    </Wrapper>
  );
}

export default PageNotFound;

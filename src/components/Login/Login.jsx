
import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toast'
import { Formik, Form } from 'formik';
import { initialValues } from 'common/config/form';
import Wrapper from 'common/components/wrapper/Wrapper';
import Button from 'common/components/Button/Button';
import Input from 'common/components/Input/Input';
import { authorization } from 'store/user/reducer';
import { errors } from '../../constants/elements';


import style from './Login.module.sass';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Wrapper paddingSize="md" className={style.login}>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          const res = await dispatch(
            authorization({
              email: values.email.trim(),
              password: values.password.trim(),
            }),
          );
          if (res.successful) {
            navigate('/courses');
          } else {
            toast.error(errors.get(res.data.result)|| res.data.result);
          }
        }}
      >
        {({ isSubmitting, values, handleChange }) => (
          <Form className={style.loginForm}>
            <Input
              type="email"
              value="Email"
              id="email"
              state={values}
              action={handleChange}
              placeholder="Enter email"
            />
            <Input
              type="password"
              value="Password"
              id="password"
              state={values}
              action={handleChange}
              placeholder="Enter password"
              autoComplete="On"

            />
            <Button
              type="submit"
              disabled={isSubmitting}
              value="Submit"
              className={style.loginButton}
            />
            <p className={style.registrationLink}>
              If you have an account you can
              <Link to="/registration"> Registration</Link>
            </p>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

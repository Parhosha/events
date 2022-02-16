import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { Formik, Form } from 'formik';
import { initialValues } from 'common/config/form';
import { sendRegistrationData } from 'store/user/reducer';
import { toast } from 'react-toast'
import Wrapper from 'common/components/wrapper/Wrapper';
import Button from 'common/components/Button/Button';
import Input from 'common/components/Input/Input';
import { errors } from '../../constants/elements';

import style from './Registration.module.sass';

export default function Registration() {
  const navigate = useNavigate();

  return (
    <Wrapper paddingSize="md" className={style.registration}>
      <h1>Registration</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          const response = await sendRegistrationData(values);
          if (response.successful) {
            navigate('/login');
          } else {
            toast.error(errors.get(response.errors[0]) || response.errors[0]);
          }
        }}
      >
        {({ isSubmitting, values, handleChange }) => (
          <Form className={style.registrationForm}>
            <Input
              type="text"
              value="Name"
              id="name"
              state={values}
              action={handleChange}
              placeholder="Enter name"
              required={true}
            />
            <Input
              type="email"
              value="Email"
              id="email"
              state={values}
              action={handleChange}
              placeholder="Enter email"
              required={true}
            />
            <Input
              type="password"
              value="Password"
              id="password"
              length={6}
              state={values}
              action={handleChange}
              placeholder="Enter password"
              autoComplete="On"
              required={true}

            />
            <Button
              type="submit"
              disabled={isSubmitting}
              value="Registration"
              className={style.registrationButton}
            />
            <p className={style.loginLink}>
              If you have an account you can
              <Link to="/login"> Login</Link>
            </p>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

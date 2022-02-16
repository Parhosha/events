import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Courses from './components/Courses/Courses';
import CourseForm from './components/CourseForm/CourseForm';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Login from './components/Login/Login';
import PageNotFound from './components/404/PageNotFound';
import PrivateRoute from './helpers/components/PrivateRoute';
import AuthRoute from './helpers/components/AuthRoute';
import Wrapper from './common/components/wrapper/Wrapper';
import ROUTE from './constants/routes';

import style from './App.module.sass';
import { ToastContainer } from 'react-toast';


export default function App() {

  return (
    <Wrapper paddingSize="md" className={style.app} testId="app">
      <Router>
        <Header />
        <Routes>
          <Route path={ROUTE.DEFAULT} element={<AuthRoute component={Courses} />} />
          <Route path={ROUTE.LOGIN} element={<Login />} />
          <Route path={ROUTE.REGISTRATION} element={<Registration />} />
          <Route path={ROUTE.COURSES} element={<AuthRoute component={Courses} />} />
          <Route path={ROUTE.COURSE_ID} element={<AuthRoute component={CourseInfo} />} />
          <Route path={ROUTE.COURSE_UPDATE} element={<PrivateRoute component={CourseForm} />} />
          <Route path={ROUTE.COURSE_ADD} element={<PrivateRoute component={CourseForm} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ToastContainer delay={3000} position="top-left"/>
    </Wrapper>
  );
}

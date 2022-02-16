import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toast'
import Input from 'common/commonComponents/Input/Input';
import Wrapper from 'common/commonComponents/wrapper/Wrapper';
import { addCourse, updateCourse } from 'store/courses/reducer';
import getDate from 'helpers/dateGeneratop';
import { validateCreation } from 'helpers/Utils';
import {
  BUTTON_CREATE_COURSE,
  BUTTON_UPDATE_COURSE,
  INPUT_DESCRIPTION,
  INPUT_TITLE,
} from 'constants/elements';

import { selectCourse } from 'store/selectors';
import style from './CourseForm.module.sass';
import Duration from './courseFormComponents/Duration/Duration';
import { CourseModel } from './models/index';
import { Authors } from './courseFormComponents/Authors/index';
import Button from '../../common/commonComponents/Button/Button';

export default function CourseForm() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const selectedCourse = useSelector((state) => selectCourse(state, courseId));
  const [course, setCourse] = useState({
    ...CourseModel,
    creationDate: getDate(),
    ...selectedCourse,
  });

  const submit = (e, fun) => {
    e.preventDefault();
    const validate = validateCreation({ ...course });
    if (validate.length) {
      toast.warn(`Please, fill in ${validate} fields`)
    } else {
      dispatch(fun({ ...course }));
      navigate('/courses');
    }
  };

  return (
    <Wrapper paddingSize="md" className={style.createCourse}>
      <form action="">
        <div className={style.title}>
          <Input
            id="title"
            className={style.titleInput}
            value={INPUT_TITLE}
            action={setCourse}
            state={course}
          />
          {courseId ? (
            <Button
              value={BUTTON_UPDATE_COURSE}
              type="submit"
              action={(e) => submit(e, updateCourse)}
            />
          ) : (
            <Button
              value={BUTTON_CREATE_COURSE}
              type="submit"
              action={(e) => submit(e, addCourse)}
            />
          )}
        </div>

        <Input
          id="description"
          className={style.description}
          value={INPUT_DESCRIPTION}
          action={setCourse}
          state={course}
        />

        <Authors handleCourse={setCourse} course={course}>
          <Duration />
        </Authors>
      </form>
    </Wrapper>
  );
}

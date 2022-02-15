import React from 'react';
import PropTypes from 'prop-types';
import Input from 'common/components/Input/Input';
import {
  INPUT_DURATION,
  PLACEHOLDER_DURATION,
} from 'constants/elements';
import courseDuration from 'helpers/pipeDuration';

import style from './Duration.module.sass';

export default function Duration({ handleCourse, course }) {
  return (
    <div className={style.addDuration}>
      <p>Duration</p>
      <Input
        id="duration"
        value={INPUT_DURATION}
        type="number"
        placeholder={PLACEHOLDER_DURATION}
        length={2}
        action={handleCourse}
        state={course}
      />
      <span className={style.duration}>
        Duration:
        <b>
          {course.duration > 0 ? ` ${courseDuration(course.duration)} ` : ' 00:00 '}
        </b>
        hours
      </span>
    </div>
  );
}

Duration.propTypes = {
  handleCourse: PropTypes.func,
  course: PropTypes.shape({ duration: PropTypes.number }),
};
Duration.defaultProps = {
  handleCourse: () => {},
  course: {},
};

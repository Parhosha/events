import AuthService from './authService';
import AuthorService from './authorService';
import CourseService from './courseService';
import userService from './userService';

export default {
  ...AuthService,
  ...AuthorService,
  ...CourseService,
  ...userService,
};

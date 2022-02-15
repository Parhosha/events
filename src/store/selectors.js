export const selectCourses = (state) => state.courses;

export const selectCourse = (state, courseId) => state.courses.find(
  (course) => course.id === courseId,
);

export const selectAuthors = (state) => state.authors;

export const selectRole = (state) => state.user.role;

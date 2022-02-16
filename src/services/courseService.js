import API from './axiosTemplate';

const CourseService = {
  async getAllCourses() {
    return await API.get('courses/all');
  },
  addCourse(course, token) {
    return API.post('courses/add', course, {
      headers: { Authorization: token },
    }).then((response) => response.data)
      .catch((e) => e.response.data);
  },
  deleteCourse(id, token) {
    return API.delete(`courses/${id}`, {
      headers: { Authorization: token },
    }).then((response) => response.data)
      .catch((e) => e.response.data);
  },
  updateCourse(course, token) {
    return API.put(`courses/${course.id}`, course, {
      headers: { Authorization: token },
    }).then((response) => response.data)
      .catch((e) => e.response.data);
  },
};

export default CourseService;

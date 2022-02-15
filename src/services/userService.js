import API from './axiosTemplate';

const userService = {
  getRole(token) {
    return API.get('users/me', {
      headers: { Authorization: token },
    }).then((response) => response.data)
      .catch((e) => e.response.data);
  },
};

export default userService;

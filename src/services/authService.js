import API from './axiosTemplate';

const AuthService = {

  registration(credits) {
    return API.post('register', { ...credits });
  },
  async authorization(credits) {
    const res = API.post('login', {
      ...credits,
    });

    return res;
  },
  async logout(token) {
    return await API.delete('logout', {
      headers: { Authorization: token },
    }).then((response) => response.data).catch((e) => e.response.data);
  },
};

export default AuthService;

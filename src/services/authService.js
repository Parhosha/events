import API from './axiosTemplate';

const AuthService = {

  async registration(credits) {
    const res = await API.post('register', { ...credits });
    return res
  },
  async authorization(credits) {
    const res = await API.post('login', {
      ...credits,
    })

    return res;
  },
  async logout(token) {
    return await API.delete('logout', {
      headers: { Authorization: token },
    }).then((response) => response.data).catch((e) => e.response.data);
  },
};

export default AuthService;

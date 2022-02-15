import API from './axiosTemplate';

const AuthorService = {
  getAllAuthors() {
    return API.get('authors/all').then((response) => response.data)
      .catch((e) => e.response.data);
  },
  addAuthor(author, token) {
    return API.post(
      'authors/add',
      { name: author.name },
      { headers: { Authorization: token } },
    ).then((response) => response.data)
      .catch((e) => e.response.data);
  },
};

export default AuthorService;

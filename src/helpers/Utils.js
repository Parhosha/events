import courseDuration from './pipeDuration';

export const getAuthorNames = (authors, courseAuthorsId) => {
  const authorNames = [];
  courseAuthorsId.map((id) => authors.filter((author) => {
    if (author.id === id) authorNames.push(author.name);
    return null;
  }));

  return authorNames;
};

export const getAuthorsList = (authors, courseAuthors) => {
  const select = authors.filter((author) => courseAuthors.find((el) => author.id === el));
  let all = [...authors];
  Object.keys(select).forEach((el) => {
    all = all.filter((author) => author.id !== select[el].id);
  });
  return { all: [...all], selected: [...select] };
};

export const getDurationString = (duration) => (duration > 0 ? ` ${courseDuration(duration)} hours` : ' 00:00 hours');

export const getFixedDescription = (description, length) => (description.length > length
  ? `${description.slice(0, length)}...`
  : description);

export const validateCreation = (state) => {
  const unFilled = Object.keys(state).filter((fieldName) => {
    if (state[fieldName] === '' || state[fieldName].length <= 0) { return fieldName; }
    return false;
  });
  return unFilled.join(',').trim();
};

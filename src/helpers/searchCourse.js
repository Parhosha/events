// eslint-disable-next-line consistent-return
const searchByParametr = (parametr, handleState, courses) => {
  if (!!parametr === false) return handleState([...courses]);

  const filtered = courses.filter(
    (course) => course.id.includes(parametr) || course.title
      .toLocaleLowerCase()
      .replace(' ', '')
      .includes(parametr.toLocaleLowerCase().replace(' ', '')),
  );
  handleState(filtered);
};

export default searchByParametr;

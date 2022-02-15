const getDate = () => {
  let creation = new Date();
  creation = `${creation.getDate()
  }/${
    creation.getMonth() + 1
  }/${
    creation.getFullYear()}`;
  return creation;
};

export default getDate;

const courseDuration = (time) => {
  const hours = time / 60 > 0 ? Math.floor(time / 60) : '00';
  const minuts = time % 60 > 9 ? time % 60 : `0${time % 60}`;

  return `${hours}:${minuts}`;
};
export default courseDuration;

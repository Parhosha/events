/* eslint-disable no-restricted-globals */
const validation = (e, location, ref, state, id, action) => {
  if (
    location.pathname === '/registration' || location.pathname === '/login'
  ) {
    action(e);
    return;
  }

  if (id === 'duration' && isNaN(Number(ref.current.value))) return;
  if (id === 'duration') {
    action({ ...state, [id]: +ref.current.value });
    return;
  }
  action({ ...state, [id]: ref.current.value });
};

export default validation;

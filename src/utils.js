export const executeThunk = async (action, dispatch) => {
  await dispatch(action);
  await new Promise(setImmediate);
};

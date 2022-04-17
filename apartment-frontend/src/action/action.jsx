const GET_DATA = "GET_DATA";
export const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};

import { GET_DATA } from "../action/action";

const init = {
  apartments: [],
};

const apartmentReducer = (state = init, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, apartments: payload };
    default:
      return state;
  }
};

export default apartmentReducer;

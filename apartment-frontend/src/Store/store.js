import apartmentReducer from "../reducer/reducer";
import { createStore } from "redux";

const store = createStore(apartmentReducer);

export default store;

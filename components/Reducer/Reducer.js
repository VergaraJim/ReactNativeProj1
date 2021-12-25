import { createStore } from "redux";
import { TOGGLE_SIDEMENU } from "./Constants";

const initialState = {
    isSideMenuOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEMENU:
        console.log(state);
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen,
      };
    default:
      return state;
  }
};

const configureStore = () => {
  return createStore(reducer);
};

const MainStore = configureStore();

export default MainStore;
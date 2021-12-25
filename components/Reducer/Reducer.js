import { createStore } from "redux";
import { PAGE_HOME, SET_PAGE, TOGGLE_SIDEMENU } from "./Constants";

const initialState = {
    isSideMenuOpen: false,
    currentPage: PAGE_HOME,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEMENU:
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen,
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.page,
      }
    default:
      return state;
  }
};

const configureStore = () => {
  return createStore(reducer);
};

const MainStore = configureStore();

export default MainStore;
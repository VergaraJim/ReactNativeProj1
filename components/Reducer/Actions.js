import { SET_PAGE, TOGGLE_SIDEMENU } from "./Constants";

export function toggleSideMenuAction() {
    return {
      type: TOGGLE_SIDEMENU,
    };
  }

export function setPageAction(page) {
  return{
    type: SET_PAGE,
    page,
  }
}
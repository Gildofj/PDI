import { SEARCH_INFORMATION_FOR_LOGGED_IN_USER } from "./actions";

const initialState = {
  ...JSON.parse(localStorage.getItem("user")),
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SEARCH_INFORMATION_FOR_LOGGED_IN_USER: {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

import { SEARCH_INFORMATION_FOR_LOGGED_IN_USER } from "./actions";

const initialState = {
  name: "",
  username: "",
  token: "",
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SEARCH_INFORMATION_FOR_LOGGED_IN_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return null;
  }
}

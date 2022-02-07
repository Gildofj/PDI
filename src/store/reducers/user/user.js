import { SEARCH_INFORMATION_FOR_LOGGED_IN_USER } from "./actions";

const initialState = {
  _id: "",
  name: "",
  username: "",
  token: "",
  phone: "",
  isAdm: false,
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
      return state;
  }
}

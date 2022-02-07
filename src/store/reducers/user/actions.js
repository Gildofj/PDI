export const SEARCH_INFORMATION_FOR_LOGGED_IN_USER =
  "users/searchInformationForLoggedInUser";

export const searchInformationForLoggedInUser = (user) => ({
  type: SEARCH_INFORMATION_FOR_LOGGED_IN_USER,
  payload: user,
});

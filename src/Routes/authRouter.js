import { Route, Redirect } from "react-router-dom";
import { useLoggedInUser } from "../store/reducers/user/selectors";

export default function AuthRoute({ ...props }) {
  const loggedInUser = useLoggedInUser();

  return loggedInUser !== null ? (
    <Route {...props} />
  ) : (
    <Redirect to="/login" />
  );
}

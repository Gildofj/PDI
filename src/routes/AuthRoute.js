import { Route, Redirect } from "react-router-dom";
import { useLoggedInUser } from "../store/reducers/user/selectors";

export default function AuthRoute({ component: Component, ...rest }) {
  const loggedInUser = useLoggedInUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedInUser.token !== "" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

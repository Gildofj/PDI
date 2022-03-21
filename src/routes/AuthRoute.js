import { Route, Redirect } from "react-router-dom";
import { useLocalStorage } from "../hooks";

export default function AuthRoute({ component: Component, ...rest }) {
  const [user] = useLocalStorage("user", "");

  return (
    <Route
      {...rest}
      render={(props) =>
        user?.token !== "" ? (
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

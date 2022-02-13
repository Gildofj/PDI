import { Switch, Route, Redirect } from "react-router-dom";

import { PagesAccountPerson, PagesAccountProducts, Login } from "../pages";
import { Sidebar } from "../components";
import AuthRoute from "./AuthRoute";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" render={() => <Redirect to="/account/person" />} />
      <Sidebar>
        <AuthRoute path="/account/person" component={PagesAccountPerson} />
        <AuthRoute path="/account/products" component={PagesAccountProducts} />
      </Sidebar>
    </Switch>
  );
}

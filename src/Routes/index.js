import { Switch, Route } from "react-router-dom";

import { PagesAccountPerson, PagesAccountProducts, Login } from "../pages";
import { Sidebar } from "../components";
import AuthRoute from "./authRouter";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Sidebar>
        <AuthRoute path="/account/person" component={PagesAccountPerson} />
        <AuthRoute path="/account/products" component={PagesAccountProducts} />
      </Sidebar>
    </Switch>
  );
}

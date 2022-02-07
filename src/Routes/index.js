import { Switch, Route } from "react-router-dom";

import { PersonAccount, Products } from "../pages/Account";
import Login from "../pages/Login";
import Sidebar from "../components/Sidebar";
import AuthRoute from "./authRouter";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Sidebar>
        <AuthRoute path="/account/person" component={PersonAccount} />
        <AuthRoute path="/account/products" component={Products} />
      </Sidebar>
    </Switch>
  );
}

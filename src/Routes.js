import { Switch, Route, Redirect } from "react-router-dom";

import { PersonAccount, Products } from "./pages/Account";
import Sidebar from "./components/Sidebar";

export default function Routes() {
  return (
    <Switch>
      <Sidebar>
        <Route path="/account/person" component={PersonAccount} />
        <Redirect exact from="/" to="/account/person" />
        <Route path="/account/products" component={Products} />
      </Sidebar>
    </Switch>
  );
}

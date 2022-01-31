import { Switch, Route } from "react-router-dom";

import { PersonAccount, Products } from "./pages/Account";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Sidebar>
        <Route path="/account/person" component={PersonAccount} />
        <Route path="/account/products" component={Products} />
      </Sidebar>
    </Switch>
  );
}

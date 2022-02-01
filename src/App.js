import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useSWR from "swr";
import { useDispatch } from "react-redux";

import Routes from "./Routes";
import { searchInformationForLoggedInUser } from "./store/reducers/user/actions";

function App() {
  const dispatch = useDispatch();
  const { data } = useSWR("/users/me");

  useEffect(() => {
    if (data) dispatch(searchInformationForLoggedInUser(data));
  }, [data, dispatch]);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

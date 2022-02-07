import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useSWR from "swr";
import { useDispatch } from "react-redux";

import Routes from "./routes";
import { searchInformationForLoggedInUser } from "./store/reducers/user/actions";

function App() {
  const dispatch = useDispatch();
  const { data } = useSWR("/users/me");

  useEffect(() => {
    if (data?.success) dispatch(searchInformationForLoggedInUser(data?.user));
  }, [data, dispatch]);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

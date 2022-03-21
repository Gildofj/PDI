import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import useSWR from "swr";
import { useDispatch } from "react-redux";

import Routes from "./routes";
import { searchInformationForLoggedInUser } from "./store/reducers/user/actions";
import { useLocalStorage } from "./hooks";

function App() {
  const dispatch = useDispatch();
  const [user] = useLocalStorage("user", null);
  const { data } = useSWR(!user ? "/users/me" : null);

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

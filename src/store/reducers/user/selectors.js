import { useSelector } from "react-redux";

export const useLoggedInUser = () => useSelector((state) => state.user);

import { makeStyles } from "@mui/styles";

const useGlobalAccountStyles = makeStyles((theme) => ({
  header: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: `${theme.spacing(5)} !important`,
    height: `${theme.spacing(5)} !important`,
  },
}));

export default useGlobalAccountStyles;

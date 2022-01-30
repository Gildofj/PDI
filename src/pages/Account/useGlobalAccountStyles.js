import { makeStyles } from "@mui/styles";

const useGlobalAccountStyles = makeStyles((theme) => ({
  header: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: `${theme.spacing(8)}px !important`,
    height: `${theme.spacing(8)}px !important`,
  },
}));

export default useGlobalAccountStyles;

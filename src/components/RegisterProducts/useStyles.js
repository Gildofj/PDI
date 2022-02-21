import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  flex: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  paper: {
    boxShadow: theme.shadows[5],
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    "&:disabled": {
      color: "#262626",
    },
    "&.label[data-shrink=true]": {
      marginBottom: "1rem !important",
    },
  },
}));

export default useStyles;

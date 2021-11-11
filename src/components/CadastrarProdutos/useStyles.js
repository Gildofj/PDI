import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  flex: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: "2rem !important",
  },
});

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  avatar: {
    width: `${theme.spacing(20)}px !important`,
    height: `${theme.spacing(20)}px !important`,
    marginBottom: "2rem",
  },
  input: {
    "&:disabled": {
      color: "#262626",
    },
    marginBottom: "2rem !important",
  },
  headerPersonAccount: {
    justifyContent: "space-between",
  },
  iconButton: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default useStyles;

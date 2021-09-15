import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  flex: {
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "column",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: "2rem",
  },
  input: {
    "&:disabled": {
      color: "#262626",
    },
    marginBottom: "2rem",
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

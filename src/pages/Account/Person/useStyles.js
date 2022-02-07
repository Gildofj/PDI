import { makeStyles } from "@mui/styles";

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
  iconButton: {
    width: `${theme.spacing(4)}px !important`,
    height: `${theme.spacing(4)}px !important`,
    color: "rgba(0, 0, 0, 0.87)",
  },
}));

export default useStyles;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    overflow: "hidden",
  },
  buttonsSection: {
    position: "absolute",
    display: "none !important",
  },
  row: {
    "&:hover": {
      "& $buttonsSection": {
        display: "flex !important",
        right: "3rem !important",
      },
    },
  },
});

export default useStyles;

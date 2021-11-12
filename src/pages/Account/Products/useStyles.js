import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    overflow: "hidden",
  },
  buttonsSection: {
    position: "absolute",
    display: "none",
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

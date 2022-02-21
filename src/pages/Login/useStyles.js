import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imgSections: {
    width: "72%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formSections: {
    width: "27%",
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default useStyles;

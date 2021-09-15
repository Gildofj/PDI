import { makeStyles } from "@material-ui/core/styles";

const useGlobalAccountStyles = makeStyles((theme) => ({
  header: {
    alignItems: "center",
  },
  icon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export default useGlobalAccountStyles;

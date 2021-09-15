import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";

// import useStyles from "./useStyles";
import useGlobalAccountStyles from "../useGlobalAccountStyles";
import Flex from "../../../components/Flex";

export default function Products() {
  // const classes = useStyles();
  const globalClasses = useGlobalAccountStyles();

  return (
    <Card>
      <CardHeader
        title={
          <Flex className={globalClasses.header}>
            <WorkRoundedIcon className={globalClasses.icon} />
            <div>Produtos</div>
          </Flex>
        }
        titleTypographyProps={{ variant: "h3" }}
      />
      <Divider />
      <CardContent>TESTE</CardContent>
    </Card>
  );
}

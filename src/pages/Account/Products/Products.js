import useSWR from "swr";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  CardHeader,
  Card,
} from "@material-ui/core";

// import useStyles from "./useStyles";
import useGlobalAccountStyles from "../useGlobalAccountStyles";
import Flex from "../../../components/Flex";

const columns = [
  { id: "name", label: "Nome" },
  { id: "preco", label: "Preço" },
];

export default function Products() {
  // const classes = useStyles();
  const globalClasses = useGlobalAccountStyles();

  const { data: products } = useSWR("/products");

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
      {products && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={product.id}
                  >
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {product[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Card>
  );
}

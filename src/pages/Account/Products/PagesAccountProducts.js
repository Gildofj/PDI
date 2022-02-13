import useSWR from "swr";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
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
} from "@mui/material";

import useStyles from "./useStyles";
import useGlobalAccountStyles from "../useGlobalAccountStyles";
import { Flex, RegisterProducts } from "../../../components";
import ProductRow from "./ProductRow";

const columns = [
  { id: "name", label: "Nome" },
  { id: "price", label: "Preço" },
];

export default function PagesAccountProducts() {
  const classes = useStyles();
  const globalClasses = useGlobalAccountStyles();

  const { data: products, mutate } = useSWR("/products");

  function registerCallback(success, value) {
    if (success) mutate((data) => [...data, value]);
  }

  function deleteCallback(success, id) {
    if (success) mutate((data) => data.filter((product) => product._id !== id));
  }

  return (
    <Card>
      <CardHeader
        title={
          <Flex className={globalClasses.header}>
            <Flex className={globalClasses.header}>
              <WorkRoundedIcon className={globalClasses.icon} />
              <div>Produtos</div>
            </Flex>
            <Flex>
              <RegisterProducts fontSize="large" callback={registerCallback} />
            </Flex>
          </Flex>
        }
        titleTypographyProps={{ variant: "h3" }}
      />
      <Divider />
      {products && (
        <Paper sx={classes.paper}>
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
                  <ProductRow
                    product={product}
                    columns={columns}
                    editCallback={registerCallback}
                    deleteCallback={deleteCallback}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Card>
  );
}

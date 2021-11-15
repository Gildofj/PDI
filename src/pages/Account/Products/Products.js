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
  IconButton,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import useStyles from "./useStyles";
import useGlobalAccountStyles from "../useGlobalAccountStyles";
import Flex from "../../../components/Flex";
import CadastrarProdutos from "../../../components/CadastrarProdutos";

const columns = [
  { id: "name", label: "Nome" },
  { id: "price", label: "Preço" },
];

export default function Products() {
  const classes = useStyles();
  const globalClasses = useGlobalAccountStyles();

  const { data: products } = useSWR("/products");

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
              <CadastrarProdutos fontSize="large" />
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
                  <TableRow
                    role="checkbox"
                    tabIndex={-1}
                    key={product.id}
                    className={classes.row}
                  >
                    {columns.map((column) => {
                      if (column.id === "price")
                        return (
                          <TableCell key={product.id}>
                            {product[column.id]},00 R$
                          </TableCell>
                        );
                      else
                        return (
                          <TableCell key={products.id}>
                            {product[column.id]}
                          </TableCell>
                        );
                    })}
                    <Flex className={classes.buttonsSection}>
                      <CadastrarProdutos
                        icon={<EditIcon />}
                        product={product}
                      />

                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Flex>
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

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

import EditIcon from "@mui/icons-material/Edit";

import useStyles from "./useStyles";
import useGlobalAccountStyles from "../useGlobalAccountStyles";
import { Flex, ConfirmModal, RegisterProducts } from "../../../components";
import api from "../../../utils/api";

const columns = [
  { id: "name", label: "Nome" },
  { id: "price", label: "Preço" },
];

export default function PagesAccountProducts() {
  const classes = useStyles();
  const globalClasses = useGlobalAccountStyles();

  const { data: products, mutate } = useSWR("//localhost:3333/products");

  function cadastrarCallback(success, value) {
    if (success) mutate((data) => [...data, value]);
  }

  function excluirCallback(id) {
    api.delete(`/products/${id}`);
    mutate((data) => data.filter((product) => product._id !== id));
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
              <RegisterProducts fontSize="large" callback={cadastrarCallback} />
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
                    key={product._id}
                    className={classes.row}
                  >
                    {columns.map((column) => {
                      // TODO: outra ideia, poderia ser refatorado para um componente que renderiza o table cell e lida com essa lógica
                      switch (column.id) {
                        case "name":
                          return <TableCell>{product[column.id]}</TableCell>;
                        case "price":
                          // TODO: usar método apropriado para formatar moeda
                          // @see: https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings
                          return (
                            <TableCell>R$ {product[column.id]},00</TableCell>
                          );
                        default:
                          return null;
                      }
                    })}
                    <Flex className={classes.buttonsSection}>
                      <RegisterProducts icon={<EditIcon />} product={product} />

                      <ConfirmModal
                        title="Excluir Produto"
                        content="Se você excluir esse produto não sera possível recupera-lo. Deseja continuar?"
                        callback={() => excluirCallback(product._id)}
                      />
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

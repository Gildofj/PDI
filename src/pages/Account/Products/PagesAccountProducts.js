import useSWR from "swr";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
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
} from "@mui/material";

import useStyles from "./useStyles";
import useGlobalAccountStyles from "../useGlobalAccountStyles";
import { Flex, RegisterProducts } from "../../../components";
import { ProductRow } from "./ProductRow";
import { useCallback, useState } from "react";
import api from "../../../utils/api";

const columns = [
  { id: "name", label: "Nome" },
  { id: "price", label: "Preço" },
];

export default function PagesAccountProducts() {
  const classes = useStyles();
  const globalClasses = useGlobalAccountStyles();
  const [productsForEdit, setProductsForEdit] = useState([]);
  const [canDrag, setCanDrag] = useState(false);

  const { data: products, mutate } = useSWR("/products");

  const registerCallback = useCallback(
    (success, value) => {
      if (success) mutate((data) => [...data, value]);
    },
    [mutate],
  );

  const deleteCallback = useCallback(
    (success, id) => {
      if (success)
        mutate((data) => data.filter((product) => product._id !== id));
    },
    [mutate],
  );

  const moveProduct = useCallback(
    (dragPosition, hoverPosition) => {
      const dragProduct = productsForEdit.find(
        (product) => product.position === dragPosition,
      );
      const hoverProduct = productsForEdit.find(
        (product) => product.position === hoverPosition,
      );

      dragProduct.position = hoverPosition;
      hoverProduct.position = dragPosition;

      setProductsForEdit((initialOrder) => [
        ...initialOrder.filter(
          (p) => p._id !== dragProduct._id && p._id !== hoverProduct._id,
        ),
        dragProduct,
        hoverProduct,
      ]);
    },
    [productsForEdit],
  );

  const editListProducts = useCallback(() => {
    setProductsForEdit(products);
    setCanDrag(true);
  }, [products]);

  const saveOrderProduct = useCallback(async () => {
    await api.put("/products", productsForEdit);
    setProductsForEdit([]);
    setCanDrag(false);
    mutate();
  }, [mutate, productsForEdit]);

  const renderRow = useCallback(
    (product, index) => (
      <ProductRow
        key={product._id}
        index={index}
        product={product}
        columns={columns}
        editCallback={registerCallback}
        deleteCallback={deleteCallback}
        moveProduct={moveProduct}
        canDrag={canDrag}
      />
    ),
    [deleteCallback, moveProduct, registerCallback, canDrag],
  );

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
              {!canDrag && (
                <>
                  <IconButton onClick={editListProducts}>
                    <FormatListNumberedRtlIcon />
                  </IconButton>
                  <RegisterProducts callback={registerCallback} />
                </>
              )}
              {canDrag && (
                <>
                  <IconButton onClick={() => setCanDrag(false)}>
                    <CloseIcon />
                  </IconButton>
                  <IconButton onClick={saveOrderProduct}>
                    <SaveIcon />
                  </IconButton>
                </>
              )}
            </Flex>
          </Flex>
        }
        titleTypographyProps={{ variant: "h3" }}
      />
      <Divider />
      {products && (
        <Paper className={classes.paper}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {!canDrag &&
                  products
                    .sort((a, b) => a.position - b.position)
                    .map((product, index) => renderRow(product, index))}
                {canDrag &&
                  productsForEdit
                    .sort((a, b) => a.position - b.position)
                    .map((product) => renderRow(product))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Card>
  );
}

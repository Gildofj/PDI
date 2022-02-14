import PropTypes from "prop-types";
import { TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import {
  Flex,
  ConfirmModal,
  RegisterProducts,
  Draggable,
} from "../../../components";
import api from "../../../utils/api";
import { formatCurrency } from "../../../utils/stringHelper";
import useStyles from "./useStyles";

ProductRow.propTypes = {
  index: PropTypes.number,
  product: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  editCallback: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired,
  dropCallback: PropTypes.func.isRequired,
};
export default function ProductRow({
  index,
  product,
  columns,
  editCallback,
  deleteCallback,
  products,
  dropCallback,
  ...props
}) {
  const classes = useStyles();

  const deleteProduct = ({ id }) => {
    try {
      api.delete(`/products/${id}`);
      deleteCallback(true, id);
    } catch (err) {
      deleteCallback(false, null);
      alert(err);
    }
  };

  return (
    <Draggable
      index={index}
      component={TableRow}
      items={products}
      callback={dropCallback}
      className={classes.row}
      tabIndex={-1}
      {...props}
    >
      {columns.map((column) => {
        switch (column.id) {
          case "name":
            return <TableCell>{product[column.id]}</TableCell>;
          case "price":
            return <TableCell>{formatCurrency(product[column.id])}</TableCell>;
          default:
            return null;
        }
      })}
      <Flex className={classes.buttonsSection}>
        <RegisterProducts
          icon={<EditIcon />}
          product={product}
          callback={editCallback}
        />

        <ConfirmModal
          title="Excluir Produto"
          content="Se você excluir esse produto não sera possível recupera-lo. Deseja continuar?"
          callback={() => deleteProduct({ id: product._id })}
        />
      </Flex>
    </Draggable>
  );
}

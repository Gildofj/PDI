import PropTypes from "prop-types";
import { TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { Flex, ConfirmModal, RegisterProducts } from "../../../components";
import api from "../../../utils/api";
import { formatCurrency } from "../../../utils/stringHelper";
import useStyles from "./useStyles";

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  editCallback: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired,
};
export default function ProductRow({
  product,
  columns,
  editCallback,
  deleteCallback,
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
    <TableRow
      role="checkbox"
      tabIndex={-1}
      key={product._id}
      className={classes.row}
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
        <RegisterProducts icon={<EditIcon />} product={product} />

        <ConfirmModal
          title="Excluir Produto"
          content="Se você excluir esse produto não sera possível recupera-lo. Deseja continuar?"
          callback={() => deleteProduct({ id: product._id })}
        />
      </Flex>
    </TableRow>
  );
}

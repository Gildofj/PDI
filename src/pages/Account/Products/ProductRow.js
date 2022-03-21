import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { TableCell, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useDrag, useDrop } from "react-dnd";

import { Flex, ConfirmModal, RegisterProducts } from "../../../components";
import api from "../../../utils/api";
import { formatCurrency } from "../../../utils/stringHelper";
import useStyles from "./useStyles";

export const ProductRow = ({
  product,
  columns,
  editCallback,
  deleteCallback,
  moveProduct,
  canDrag,
  ...props
}) => {
  const classes = useStyles();
  const refProduct = useRef(null);

  const [, drag] = useDrag(() => ({
    type: "PRODUCT",
    item: () => ({
      id: product._id,
      position: product.position,
    }),
    canDrag,
  }));

  const [{ handlerId }, drop] = useDrop(() => ({
    accept: "PRODUCT",
    hover: (item, monitor) => {
      if (!refProduct.current) return;

      const dragIndex = item.position;
      const hoverIndex = product.position;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = refProduct.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      console.log(hoverIndex);

      moveProduct(dragIndex, hoverIndex);

      item.position = hoverIndex;
    },
    collect: (monitor) => ({ handlerId: monitor.getHandlerId() }),
  }));

  useEffect(() => {
    drop(drag(refProduct));
  }, [drag, drop]);

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
      ref={refProduct}
      className={classes.row}
      tabIndex={-1}
      data-handler-id={handlerId}
      {...props}
    >
      {columns.map((column) => {
        switch (column.id) {
          case "name":
            return (
              <TableCell key={column._id}>
                {canDrag && <DragIndicatorIcon />}
                {product[column.id]}
              </TableCell>
            );
          case "price":
            return (
              <TableCell key={column._id}>
                {formatCurrency(product[column.id])}
              </TableCell>
            );
          default:
            return null;
        }
      })}
      {!canDrag && (
        <Flex className={classes.buttonsSection}>
          <RegisterProducts
            icon={<EditIcon />}
            product={product}
            callback={editCallback}
          />

          <ConfirmModal
            title="Excluir Produto"
            tooltip="Excluir Produto"
            content="Se você excluir esse produto não sera possível recupera-lo. Deseja continuar?"
            callback={() => deleteProduct({ id: product._id })}
            icon={<DeleteIcon />}
          />
        </Flex>
      )}
    </TableRow>
  );
};

ProductRow.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  editCallback: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired,
  moveProduct: PropTypes.func.isRequired,
  canDrag: PropTypes.bool.isRequired,
};

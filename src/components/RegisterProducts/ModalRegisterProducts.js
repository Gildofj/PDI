import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import FormRegisterProducts from "./FormRegisterProducts";
import useStyles from "./useStyles";
import Flex from "../_UI/Flex/Flex";

ModalRegisterProducts.propTypes = {
  product: PropTypes.object,
  icon: PropTypes.node,
  callback: PropTypes.func,
  tooltip: PropTypes.string,
};

export default function ModalRegisterProducts({
  product,
  icon,
  callback,
  tooltip = "Cadastrar Produto",
  ...props
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Tooltip title={tooltip}>
        <IconButton onClick={handleToggleOpen} {...props}>
          {icon ? icon : <AddIcon {...props} />}
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleToggleOpen} className={classes.paper}>
        <Flex className={classes.flex}>
          <DialogTitle sx={{ fontSize: "2rem" }}>Cadastrar Produto</DialogTitle>
          <DialogContent>
            <FormRegisterProducts
              product={product}
              sx={classes.form}
              callback={callback}
              handleCloseModal={handleToggleOpen}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleToggleOpen}>Cancelar</Button>
            <Button type="submit" form="form-register-product">
              Cadastrar
            </Button>
          </DialogActions>
        </Flex>
      </Dialog>
    </>
  );
}

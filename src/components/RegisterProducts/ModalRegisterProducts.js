import { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import FormRegisterProducts from "./FormRegisterProducts";
import useStyles from "./useStyles";
import Flex from "../_UI/Flex/Flex";

ModalRegisterProducts.propTypes = {
  product: PropTypes.object,
  icon: PropTypes.node,
  callback: PropTypes.func,
};

export default function ModalRegisterProducts({
  product,
  icon,
  callback,
  ...props
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton onClick={handleToggleOpen} {...props}>
        {icon ? icon : <AddIcon {...props} />}
      </IconButton>

      <Dialog open={open} onClose={handleToggleOpen} className={classes.paper}>
        <Flex className={classes.flex}>
          <DialogTitle>
            <Typography variant="h3">Cadastrar Produto</Typography>
          </DialogTitle>
          <DialogContent>
            <FormRegisterProducts
              product={product}
              sx={classes.form}
              callback={callback}
              handleCloseModal={handleToggleOpen}
            />
          </DialogContent>
          <DialogActions>
            <Button color="default" onClick={handleToggleOpen}>
              Cancelar
            </Button>
            <Button color="primary" type="submit" form="form-register-product">
              Cadastrar
            </Button>
          </DialogActions>
        </Flex>
      </Dialog>
    </>
  );
}

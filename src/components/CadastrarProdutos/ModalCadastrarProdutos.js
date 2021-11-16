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
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import FormCadastrarProdutos from "./FormCadastrarProdutos";
import Flex from "../Flex";

import useStyles from "./useStyles";

ModalCadastrarProdutos.propTypes = {
  product: PropTypes.object,
  icon: PropTypes.node,
  callback: PropTypes.func,
};

export default function ModalCadastrarProdutos({
  product,
  icon,
  callback,
  ...props
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggleOpen = (success = false) => {
    setOpen(!open);
    callback(success);
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
            <FormCadastrarProdutos
              product={product}
              sx={classes.form}
              callback={handleToggleOpen}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleToggleOpen}>Cancelar</Button>
            <Button color="primary" type="submit" form="form-cadastro-produto">
              Cadastrar
            </Button>
          </DialogActions>
        </Flex>
      </Dialog>
    </>
  );
}

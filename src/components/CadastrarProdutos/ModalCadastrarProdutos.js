import { useRef, useState } from "react";
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
};

export default function ModalCadastrarProdutos({ product, icon, ...props }) {
  const formRef = useRef(null);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => setOpen(!open);

  function handleSubmit() {
    console.log(formRef);
  }

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
              innerRef={formRef}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleToggleOpen}>Cancelar</Button>
            <Button color="primary" onCLick={handleSubmit}>
              Cadastrar
            </Button>
          </DialogActions>
        </Flex>
      </Dialog>
    </>
  );
}

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
      <Dialog open={open} onClose={handleToggleOpen} 
      // TODO: Qual a necessidade desse estilo?
      // className={classes.paper}
      
      >
        {/* TODO: Qual a necessidade desse Flex aqui? */}
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
          <Button onClick={handleToggleOpen}>Cancelar</Button>
          <Button color="primary" type="submit" form="form-cadastro-produto">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

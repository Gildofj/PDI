import { useState } from "react";
import { IconButton, Paper, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import FormCadastrarProdutos from "./FormCadastrarProdutos";
import Flex from "../Flex";
import ModalPadrao from "../ModalPadrao";

import useStyles from "./useStyles";

export default function ModalCadastrarProdutos({
  product,
  children,
  ...props
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => setOpen(!open);

  return (
    <>
      {children ? (
        children({ ...props, onClick: handleToggleOpen })
      ) : (
        <IconButton onClick={handleToggleOpen} {...props}>
          <AddIcon {...props} />
        </IconButton>
      )}
      <ModalPadrao open={open} onClose={handleToggleOpen}>
        <Flex className={classes.flex}>
          <Paper>
            <Typography variant="h3">Cadastrar Produto</Typography>
            <FormCadastrarProdutos product={product} sx={classes.form} />
          </Paper>
        </Flex>
      </ModalPadrao>
    </>
  );
}

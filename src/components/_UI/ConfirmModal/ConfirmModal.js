import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ConfirmModal({
  title,
  content,
  cancelText = "Cancelar",
  confirmText = "Confirmar",
  callback,
}) {
  const [open, setOpen] = useState(false);

  function handleToggleOpen() {
    setOpen(!open);
  }

  function confirmCallback() {
    handleToggleOpen();
    callback();
  }

  return (
    <>
      <IconButton onClick={handleToggleOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleToggleOpen}>
        <DialogTitle>
          <Typography variant="h3">{title}</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">{content}</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleToggleOpen}>
            {cancelText}
          </Button>
          <Button variant="text" color="primary" onClick={confirmCallback}>
            {confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

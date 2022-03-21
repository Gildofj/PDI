import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";

export default function ConfirmModal({
  title,
  content,
  tooltip = "Open Modal",
  cancelText = "Cancelar",
  confirmText = "Confirmar",
  callback,
  icon,
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
      {!!icon && (
        <Tooltip title={tooltip}>
          <IconButton onClick={handleToggleOpen}>{icon}</IconButton>
        </Tooltip>
      )}
      {!icon && (
        <Tooltip title={tooltip}>
          <Button onClick={handleToggleOpen}>{tooltip}</Button>
        </Tooltip>
      )}

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

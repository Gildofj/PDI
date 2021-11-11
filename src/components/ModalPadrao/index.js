import Modal from "@material-ui/core/Modal";

export default function ModalPadrao({ children, ...props }) {
  return <Modal {...props}>{children}</Modal>;
}

//  display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   flexDirection: "column",
//   width: "50rem",
//   height: "50rem",

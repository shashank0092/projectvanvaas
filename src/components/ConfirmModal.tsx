import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { closeModal, clearModalContent } from "../store/slices/modalSlice";

const ConfirmModal = () => {
  const dispatch = useAppDispatch();
  const {
    isOpen,
    title,
    message,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
  } = useAppSelector((state) => state.modal);

  const handleClose = () => {
    if (onCancel) {
      onCancel();
    }
    dispatch(closeModal());
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    dispatch(closeModal());
  };

  const handleExited = () => {
    // Clear content after animation completes
    dispatch(clearModalContent());
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      TransitionProps={{
        onExited: handleExited,
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          borderRadius: "12px",
          minWidth: { xs: "90%", sm: "400px" },
          maxWidth: { xs: "90%", sm: "500px" },
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#1B1B1B",
          pb: 1,
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{
            color: "#6B5B53",
            fontSize: "1rem",
            lineHeight: 1.6,
          }}
        >
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          px: 3,
          pb: 2.5,
          gap: 1.5,
        }}
      >
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{
            textTransform: "none",
            px: 3,
            py: 1,
            borderColor: "#C77B30",
            color: "#C77B30",
            fontWeight: 600,
            borderRadius: "8px",
            "&:hover": {
              borderColor: "#A56324",
              backgroundColor: "rgba(199, 123, 48, 0.1)",
            },
          }}
        >
          {cancelText}
        </Button>
        <Button
          onClick={handleConfirm}
          variant="contained"
          autoFocus
          sx={{
            textTransform: "none",
            px: 3,
            py: 1,
            backgroundColor: "#C77B30",
            fontWeight: 600,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#A56324",
            },
          }}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;

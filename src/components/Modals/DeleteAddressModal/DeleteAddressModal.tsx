import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import useDeleteAddressModal from "../../../Hooks/Address/useDeleteAddressModal";
import ModalCancelButton from "../../../utility/Modal/ModalCancelButton/ModalCancelButton";
import ModalDeleteButton from "../../../utility/Modal/ModalDeleteButton/ModalDeleteButton";

export default function DeleteAddressModal() {
  const { open, handleClose, handleDeleteAddress, loading } =
    useDeleteAddressModal();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      TransitionComponent={Slide}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="alert-dialog-title">حذف عنوان</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          هل انت متاكد من عملية حذف العنوان؟
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ gap: 1 }}>
        <ModalCancelButton onClick={handleClose} />
        <ModalDeleteButton onClick={handleDeleteAddress} disabled={loading} />
      </DialogActions>
    </Dialog>
  );
}

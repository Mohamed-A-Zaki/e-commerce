import { deleteAddress } from "../../store/AddressSlice/AddressSlice";
import { closeDeleteAddressModal } from "../../store/DeleteAddressModalSlice/DeleteAddressModalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toast } from 'react-toastify';

const useDeleteAddressModal = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.Address);
  const { open, addressID } = useAppSelector(
    (state) => state.DeleteAddressModal
  );

  const handleClose = () => {
    dispatch(closeDeleteAddressModal());
  };

  const handleDeleteAddress = () => {
    dispatch(deleteAddress(addressID))
      .unwrap()
      .then(() => {
        toast.success("تم الحذف بنجاح");
        handleClose();
      })
      .catch(() => {
        toast.error("يوجد خطا ما");
      });
  };

  return { open, handleClose, handleDeleteAddress, loading };
};

export default useDeleteAddressModal;

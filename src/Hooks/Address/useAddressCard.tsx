import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { openDeleteAddressModal } from "../../store/DeleteAddressModalSlice/DeleteAddressModalSlice";

const useAddressCard = (id: string) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleEditButton = () => {
    navigate(`/user/edit-address/${id}`);
  };

  const handleDeleteButton = () => {
    dispatch(openDeleteAddressModal(id));
  };

  return { handleEditButton, handleDeleteButton };
};

export default useAddressCard;

import { useAppDispatch } from "../../store/hooks";
import {
  openDeleteCouponModal,
  setDeleteCouponID,
} from "../../store/DeleteCouponModalSlice/DeleteCouponModalSlice";
import { useNavigate } from "react-router-dom";

const useAdminCoupon = (id: string) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDeletButton = () => {
    dispatch(openDeleteCouponModal());
    dispatch(setDeleteCouponID(id));
  };

  const handleEditButton = () => {
    navigate(`/admin/editcoupon/${id}`);
  };

  return { handleDeletButton, handleEditButton };
};

export default useAdminCoupon;

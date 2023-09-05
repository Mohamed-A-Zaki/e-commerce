import { openClearCartModal } from "../../store/ClearCartModalSlice/ClearCartModalSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const useApplyCoupon = () => {
  const dispatch = useAppDispatch();
  const { total_price } = useAppSelector((state) => state.Cart);

  const handleDeleteButtton = () => {
    dispatch(openClearCartModal());
  };

  return { handleDeleteButtton, total_price };
};

export default useApplyCoupon;

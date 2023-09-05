import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { openDeleteProductFromCartModal } from "../../store/DeleteProductFromCartModalSlice/DeleteProductFromCartModalSlice";
import { updateQuantity } from "../../store/CartSlice/CartSlice";
import { toast } from "react-toastify";

const useCartItem = (_id : string , count : number) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(count);
  const [loading, setLoading] = useState(false);

  const handleDeleteButton = () => {
    dispatch(openDeleteProductFromCartModal(_id));
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleApplyButton = () => {
    setLoading(true);

    dispatch(updateQuantity({ productId: _id, values: { count: quantity } }))
      .unwrap()
      .then(() => {
        toast.success("تم تعديل الكمية بنجاح");
      })
      .catch(() => {
        toast.error("حدث خطا ما");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    quantity,
    handleChangeQuantity,
    handleApplyButton,
    loading,
    handleDeleteButton,
  };
};

export default useCartItem;

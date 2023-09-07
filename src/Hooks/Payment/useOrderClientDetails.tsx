import { updateOrderToDeliverd, updateOrderToPaid } from "../../store/OrderSlice/OrderSlice";
import { useAppDispatch } from "../../store/hooks";
import { useState } from "react";
import { toast } from "react-toastify";

const useOrderClientDetails = (id: string) => {
  const dispatch = useAppDispatch();

  const [paidLoading, setPaidLoading] = useState(false);
  const [deliverLoading, setDeliverLoading] = useState(false);

  const handleUpdateOrderToDelivered = () => {
    setDeliverLoading(true);
    dispatch(updateOrderToDeliverd(id))
      .unwrap()
      .then(() => {
        toast.success("تم تسليم الطلب بنجاح");
      })
      .catch(() => {
        toast.error("فشل في تسليم الطلب");
      })
      .finally(() => {
        setDeliverLoading(false);
      });
  };

  const handleUpdateOrderToPaid = () => {
    setPaidLoading(true);
    dispatch(updateOrderToPaid(id))
      .unwrap()
      .then(() => {
        toast.success("تم دفع الطلب بنجاح");
      })
      .catch(() => {
        toast.error("فشل في دفع الطلب");
      })
      .finally(() => {
        setPaidLoading(false);
      });
  };

  return {
    handleUpdateOrderToDelivered,
    handleUpdateOrderToPaid,
    paidLoading,
    deliverLoading,
  };
};

export default useOrderClientDetails;

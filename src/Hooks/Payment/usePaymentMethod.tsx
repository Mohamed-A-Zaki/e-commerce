import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getAddresses } from "../../store/AddressSlice/AddressSlice";
import {
  createCardOrder,
  createCashOrder,
} from "../../store/OrderSlice/OrderSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const usePaymentMethod = () => {
  const [method, setMethod] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { addresses } = useAppSelector((state) => state.Address);
  const { totalAfterDiscount, cart_id } = useAppSelector((state) => state.Cart);

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  const handelCreateCashOrder = () => {
    const address_object = addresses.find((ele) => ele._id === address);

    const values = {
      shippingAddress: {
        details: address_object?.details || "",
        phone: address_object?.phone || "",
        city: "",
        postalCode: "",
      },
    };

    setLoading(true);

    dispatch(createCashOrder({ cartId: cart_id, address: values }))
      .unwrap()
      .then(() => {
        navigate("/user/allorders");
        toast.success("تم انشاء الطلب");
      })
      .catch(() => {
        toast.error("يوجد خطا ما");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handelCreateCardOrder = () => {
    dispatch(createCardOrder(cart_id));
  };

  const handleCreateOrder = () => {
    if (method === "cash") {
      handelCreateCashOrder();
    } else {
      handelCreateCardOrder();
    }
  };

  return {
    method,
    setMethod,
    totalAfterDiscount,
    addresses,
    address,
    setAddress,
    handleCreateOrder,
    loading,
  };
};

export default usePaymentMethod;

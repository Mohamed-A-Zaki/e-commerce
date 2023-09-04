import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import CartItem from "../CartItem/CartItem";
import { getCartProducts } from "../../../store/CartSlice/CartSlice";
import Loading from "../../../utility/Loading/Loading";
import ErrorMessage from "../../../utility/ErrorMessage/ErrorMessage";
import EmptyListMessage from "../../../utility/EmptyListMessage/EmptyListMessage";

export default function CartItemList() {
  const dispatch = useAppDispatch();
  const { cart_products, loading, error } = useAppSelector(
    (state) => state.Cart
  );

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    if (error === "Request failed with status code 404") {
      return (
        <EmptyListMessage>
          لا يوجد أي منتجات في السلة حاليا...
        </EmptyListMessage>
      );
    }
    return <ErrorMessage>يوجد خطا ما...</ErrorMessage>;
  }

  if (cart_products.length === 0) {
    return (
      <EmptyListMessage>لا يوجد أي منتجات في السلة حاليا...</EmptyListMessage>
    );
  }

  return cart_products.map((product) => {
    return <CartItem key={product._id} {...product} />;
  });
}

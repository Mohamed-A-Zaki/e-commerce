import { getAllOrders } from "../../../store/OrderSlice/OrderSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import EmptyListMessage from "../../../utility/EmptyListMessage/EmptyListMessage";
import ErrorMessage from "../../../utility/ErrorMessage/ErrorMessage";
import Loading from "../../../utility/Loading/Loading";
import UserOrderCard from "../UserOrderCard/UserOrderCard";
import { useEffect } from "react";

export default function UserOrderList() {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.Pagination);
  const { orders, error, loading } = useAppSelector((state) => state.Order);

  useEffect(() => {
    dispatch(getAllOrders(page));
  }, [dispatch, page]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>يوجد خطا ما...</ErrorMessage>;
  }

  if (orders.length === 0) {
    return <EmptyListMessage>لا يوجد أي طلبات حاليا...</EmptyListMessage>;
  }

  return orders.map((ele) => {
    return <UserOrderCard key={ele._id} {...ele} />;
  });
}

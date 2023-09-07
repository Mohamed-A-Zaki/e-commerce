import { useEffect } from "react";
import { getAllOrders } from "../../../store/OrderSlice/OrderSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import AdminOrderItem from "../AdminOrderItem/AdminOrderItem";
import Loading from "../../../utility/Loading/Loading";
import ErrorMessage from "../../../utility/ErrorMessage/ErrorMessage";
import EmptyListMessage from "../../../utility/EmptyListMessage/EmptyListMessage";

export default function AdminOrderList() {
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
    return <AdminOrderItem key={ele._id} {...ele} />;
  });
}

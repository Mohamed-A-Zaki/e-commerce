import { Stack } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import OrderClientDetails from "../../../components/Admin/OrderClientDetails/OrderClientDetails";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getSpecificOrder } from "../../../store/OrderSlice/OrderSlice";
import { useParams } from "react-router-dom";
import Loading from "../../../utility/Loading/Loading";
import ErrorMessage from "../../../utility/ErrorMessage/ErrorMessage";
import UserOrderCard from "../../../components/User/UserOrderCard/UserOrderCard";
import { OrderType } from "../../../types/Order/Order.type";

export default function AdminOrderDetails() {
  const { order_id } = useParams();

  const dispatch = useAppDispatch();
  const { specific_order, loading, error } = useAppSelector(
    (state) => state.Order
  );

  useEffect(() => {
    dispatch(getSpecificOrder(order_id as string));
  }, [dispatch, order_id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>يوجد خطا ما...</ErrorMessage>;
  }

  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>تفاصيل الطلب رقم# ( {specific_order?.id} )</SectionTitle>
      <UserOrderCard {...specific_order as OrderType} />
      <OrderClientDetails />
    </Stack>
  );
}

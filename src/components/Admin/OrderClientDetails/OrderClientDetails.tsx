import { Box, Stack, Typography } from "@mui/material";

import MainButton from "../../../utility/MainButton/MainButton";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import { useAppSelector } from "../../../store/hooks";
import useOrderClientDetails from "../../../Hooks/Payment/useOrderClientDetails";

export default function OrderClientDetails() {
  const { specific_order } = useAppSelector((state) => state.Order);
  const user = specific_order?.user;

  const {
    handleUpdateOrderToDelivered,
    handleUpdateOrderToPaid,
    paidLoading,
    deliverLoading,
  } = useOrderClientDetails(specific_order?._id || "");

  return (
    <Box bgcolor={"#fff"} p={2} borderRadius={3}>
      <SectionTitle>تفاصيل العميل</SectionTitle>

      <Box display={"flex"} alignItems={"center"} gap={1} my={0.5}>
        الاسم :<Typography color={"text.secondary"}>{user?.name}</Typography>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={1} my={0.5}>
        رقم الهاتف :
        <Typography color={"text.secondary"}>{user?.phone}</Typography>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={1} my={0.5}>
        الايميل :<Typography color={"text.secondary"}>{user?.email}</Typography>
      </Box>

      <Stack direction={"row"} gap={2} mt={2} justifyContent={"center"}>
        <MainButton
          disabled={specific_order?.isPaid || paidLoading}
          onClick={handleUpdateOrderToPaid}
        >
          {specific_order?.isPaid ? "تم الدفع" : "لم يتم الدفع"}
        </MainButton>
        <MainButton
          disabled={specific_order?.isDelivered || deliverLoading}
          onClick={handleUpdateOrderToDelivered}
        >
          {specific_order?.isDelivered ? "تم التوصيل" : "لم يتم التوصيل"}
        </MainButton>
      </Stack>
    </Box>
  );
}

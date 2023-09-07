import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import UserOrderItem from "../UserOrderItem/UserOrderItem";
import { OrderType } from "../../../types/Order/Order.type";

export default function UserOrderCard(props: OrderType) {
  const {
    isPaid,
    isDelivered,
    id,
    totalOrderPrice,
    cartItems,
    paymentMethodType,
  } = props;

  const renderFooter = () => {
    return (
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            الدفع:
            <Typography color={"text.secondary"}>
              {isPaid ? "تم الدفع" : "لم يتم الدفع"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            طريقة الفع:
            <Typography color={"text.secondary"}>
              {paymentMethodType === "cash" ? "كاش" : "بطاقة ائتمانية"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            التوصيل:
            <Typography color={"text.secondary"}>
              {isDelivered ? "تم التوصيل" : "لم يتم التوصيل"}
            </Typography>
          </Box>
        </Box>
        <Typography fontWeight={"bold"} fontSize={20}>
          {totalOrderPrice} جنية
        </Typography>
      </Stack>
    );
  };

  return (
    <Card>
      <CardContent>
        <Typography fontWeight={"bold"}>طلب رقم # ( {id} )</Typography>

        {cartItems.map((item) => {
          return <UserOrderItem key={item._id} {...item} />;
        })}

        {renderFooter()}
      </CardContent>
    </Card>
  );
}

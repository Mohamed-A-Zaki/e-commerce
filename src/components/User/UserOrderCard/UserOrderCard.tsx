import { Card, CardContent, Stack, Typography } from "@mui/material";
import UserOrderItem from "../UserOrderItem/UserOrderItem";
import { OrderType } from "../../../types/Order/Order.type";

export default function UserOrderCard(props: OrderType) {
  const { cartItems, totalOrderPrice, id } = props;

  const renderFooter = () => {
    return (
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography sx={{ display: "flex", gap: 1 }}>
          الحالة:
          <Typography color={"text.secondary"}>قيد التنفيذ</Typography>
        </Typography>
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
        {/* <UserOrderItem />
        <UserOrderItem /> */}

        {cartItems.map((item) => {
          return <UserOrderItem key={item._id} {...item} />;
        })}

        {renderFooter()}
      </CardContent>
    </Card>
  );
}

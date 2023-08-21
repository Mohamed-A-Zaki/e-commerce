import { Card, CardContent, Stack, Typography } from "@mui/material";
import UserOrderItem from "../UserOrderItem/UserOrderItem";

export default function UserOrderCard() {
  const renderFooter = () => {
    return (
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography sx={{ display: "flex", gap: 1 }}>
          الحالة:
          <Typography color={"text.secondary"}>قيد التنفيذ</Typography>
        </Typography>
        <Typography fontWeight={"bold"} fontSize={20}>
          4000 جنية
        </Typography>
      </Stack>
    );
  };

  return (
    <Card>
      <CardContent>
        <Typography fontWeight={"bold"}>طلب رقم #123</Typography>
        <UserOrderItem />
        <UserOrderItem />
        {renderFooter()}
      </CardContent>
    </Card>
  );
}

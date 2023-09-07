import { useNavigate } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { OrderType } from "../../../types/Order/Order.type";

export default function AdminOrderItem({
  id,
  _id,
  totalOrderPrice,
  user,
}: OrderType) {
  const navigate = useNavigate();

  return (
    <Stack
      direction={"row"}
      bgcolor={"#fff"}
      p={2}
      borderRadius={3}
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`/admin/orders/${_id}`)}
    >
      <Box flexGrow={1}>
        <Typography fontWeight={"bold"}>طلب رقم # ( {id} )</Typography>

        <Stack
          mt={2}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography>طلب من : {user.name}</Typography>

          <Typography fontWeight={"bold"}>{totalOrderPrice} جنية</Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

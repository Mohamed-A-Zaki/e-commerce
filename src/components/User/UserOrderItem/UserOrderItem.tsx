import ColorItem from "../../../utility/ColorItem/ColorItem";
import { Stack, Box, Typography, TextField } from "@mui/material";
import { OrderProductType } from "../../../types/Order/Order.type";

export default function UserOrderItem(props: OrderProductType) {
  const { product, count, color } = props;
  const { imageCover, ratingsQuantity, ratingsAverage, title } = product;

  return (
    <Stack direction={"row"} bgcolor={"#fff"} p={1} mb={1} borderRadius={3}>
      <Box
        component={"img"}
        src={`http://127.0.0.1:8000/products/${imageCover}`}
        alt={title}
        sx={{ width: 120 }}
      />

      <Box flexGrow={1} mr={2}>
        <Stack mt={2}>
          <Typography fontSize={14}>{title}</Typography>

          <Stack direction={"row"} gap={1} my={2} alignItems={"center"}>
            <Typography sx={{ fontSize: 14 }}>
              <ColorItem color={color} />
            </Typography>
            <Typography sx={{ fontSize: 14 }} color={"#FFC107"}>
              {ratingsAverage}
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              ({ratingsQuantity} تقييم)
            </Typography>
          </Stack>

          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Typography fontSize={14} color={"text.secondary"}>
              الكمية
            </Typography>
            <TextField
              type="number"
              size="small"
              value={count}
              sx={{ "& input": { width: 50, height: 10 } }}
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}

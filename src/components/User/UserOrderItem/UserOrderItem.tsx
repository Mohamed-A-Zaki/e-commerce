import ColorItem from "../../../utility/ColorItem/ColorItem";
import { Stack, Box, Typography, TextField } from "@mui/material";
import { OrderProductType } from "../../../types/Order/Order.type";

export default function UserOrderItem(props: OrderProductType) {
  const { product, count, color } = props;
  const { imageCover, ratingsQuantity, ratingsAverage, title } = product;

  return (
    <Stack
      direction={"row"}
      bgcolor={"#fff"}
      p={1}
      mb={1}
      borderBottom={1}
      borderColor={"#ccc"}
    >
      <Box
        component={"img"}
        src={`https://e-commerce-backend-b89n.onrender.com/products/${imageCover}`}
        alt={title}
        sx={{ width: 120, height: 120, objectFit: "contain" }}
      />

      <Box flexGrow={1} mr={2}>
        <Stack mt={2}>
          <Typography fontSize={14}>{title}</Typography>

          <Stack direction={"row"} gap={1} my={2} alignItems={"center"}>
            <ColorItem color={color} sx={{ fontSize: 14 }} />

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

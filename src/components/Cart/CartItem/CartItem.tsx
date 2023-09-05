import StarIcon from "@mui/icons-material/Star";
import { Stack, Box, Typography, TextField, Button } from "@mui/material";

import useCartItem from "../../../Hooks/Cart/useCartItem";
import ColorItem from "../../../utility/ColorItem/ColorItem";
import { CartProductType } from "../../../types/Cart/Cart.type";
import DeleteButton from "../../../utility/DeleteButton/DeleteButton";
import DeleteEditBtnscontainer from "../../../utility/DeleteEditBtnscontainer/DeleteEditBtnscontainer";

export default function CartItem(props: CartProductType) {
  const { price, product, color, count, _id } = props;
  const { imageCover, title, category, brand, ratingsAverage } = product;

  const {
    quantity,
    handleChangeQuantity,
    handleApplyButton,
    loading,
    handleDeleteButton,
  } = useCartItem(_id, count);

  return (
    <Stack direction={"row"} bgcolor={"#fff"} p={1} mb={1} borderRadius={3}>
      <Box
        component={"img"}
        src={`http://127.0.0.1:8000/products/${imageCover}`}
        alt=""
        sx={{ width: 120 }}
      />

      <Box flexGrow={1} mr={2} position={"relative"}>
        <Typography>{category?.name}</Typography>
        <DeleteEditBtnscontainer>
          <DeleteButton onClick={handleDeleteButton} />
        </DeleteEditBtnscontainer>

        <Stack mt={2}>
          <Stack direction={"row"} gap={1} my={0.5} alignItems={"center"}>
            <Typography fontSize={14}>{title}</Typography>
            <StarIcon sx={{ color: "#FFC107" }} />
            <Typography color={"#FFC107"}>{ratingsAverage}</Typography>
          </Stack>

          <Stack direction={"row"} gap={1} my={0.5} alignItems={"center"}>
            <Typography fontSize={14} color={"text.secondary"}>
              الماركة:
            </Typography>
            <Typography fontWeight={"bold"} fontSize={20}>
              {brand?.name}
            </Typography>
          </Stack>

          <ColorItem color={color} />

          <Stack
            direction={"row"}
            gap={1}
            my={0.5}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <Typography fontSize={14} color={"text.secondary"}>
                الكمية
              </Typography>
              <TextField
                type="number"
                size="small"
                value={quantity}
                sx={{ "& input": { width: 50, height: 10 } }}
                onChange={handleChangeQuantity}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#000",
                  px: 1,
                  py: 0.2,
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "#000",
                  },
                }}
                onClick={handleApplyButton}
                disabled={loading}
              >
                {loading ? "جاري التعديل" : "تعديل"}
              </Button>
            </Box>
            <Typography fontSize={20} fontWeight={"bold"}>
              {price} جنية
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

import StarIcon from "@mui/icons-material/Star";
import { Stack, Box, Typography, TextField } from "@mui/material";

import ColorItem from "../../../utility/ColorItem/ColorItem";
import { CartProductType } from "../../../types/Cart/Cart.type";
import DeleteButton from "../../../utility/DeleteButton/DeleteButton";
import DeleteEditBtnscontainer from "../../../utility/DeleteEditBtnscontainer/DeleteEditBtnscontainer";
import { useAppDispatch } from "../../../store/hooks";
import { openDeleteProductFromCartModal } from "../../../store/DeleteProductFromCartModalSlice/DeleteProductFromCartModalSlice";

export default function CartItem(props: CartProductType) {
  const { price, product, color, count , _id} = props;
  const { imageCover, title, category, ratingsAverage } = product;

  const dispatch = useAppDispatch();

  const handleDeleteButton = () => {
    dispatch(openDeleteProductFromCartModal(_id));
  };

  return (
    <Stack direction={"row"} bgcolor={"#fff"} p={1} mb={1} borderRadius={3}>
      <Box
        component={"img"}
        src={`http://127.0.0.1:8000/products/${imageCover}`}
        alt=""
        sx={{ width: 120 }}
      />

      <Box flexGrow={1} mr={2} position={"relative"}>
        <Typography>{category.name}</Typography>
        <DeleteEditBtnscontainer>
          <DeleteButton onClick={handleDeleteButton} />
        </DeleteEditBtnscontainer>

        <Stack mt={2}>
          <Stack direction={"row"} gap={1} my={0.5} alignItems={"center"}>
            <Typography fontSize={14}>
              آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
            </Typography>
            <StarIcon sx={{ color: "#FFC107" }} />
            <Typography color={"#FFC107"}>{ratingsAverage}</Typography>
          </Stack>

          <Stack direction={"row"} gap={1} my={0.5} alignItems={"center"}>
            <Typography fontSize={14} color={"text.secondary"}>
              الماركة:
            </Typography>
            <Typography fontWeight={"bold"} fontSize={20}>
              {title}
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
                value={count}
                sx={{ "& input": { width: 50, height: 10 } }}
              />
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

import { Box, Button, SxProps, TextField, Theme } from "@mui/material";

import MainButton from "../../../utility/MainButton/MainButton";
import useApplyCoupon from "../../../Hooks/Cart/useApplyCoupon";
import PriceButton from "../../../utility/PriceButton/PriceButton";

export default function Copon() {
  const {
    handleDeleteButtton,
    totalAfterDiscount,
    coupon,
    couponValue,
    handleChange,
    handleApplyCoupon,
    loading,
    goToPAymentMethod,
  } = useApplyCoupon();

  return (
    <Box bgcolor={"#fff"} p={2} borderRadius={3}>
      <Box display={"flex"}>
        <TextField
          size="small"
          placeholder="كود الخصم"
          value={coupon || couponValue}
          sx={TextFieldStyle}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          sx={ButtonStyle}
          onClick={handleApplyCoupon}
          disabled={loading}
        >
          {loading ? "جاري التطبيق" : "تطبيق"}
        </Button>
      </Box>

      <Box my={1.5}>
        <PriceButton>{totalAfterDiscount}</PriceButton>
      </Box>

      <MainButton fullWidth onClick={goToPAymentMethod}>
        اتمام الشراء
      </MainButton>

      <Box mt={1.5}>
        <MainButton fullWidth onClick={handleDeleteButtton}>
          حذف محتوي السلة
        </MainButton>
      </Box>
    </Box>
  );
}

const TextFieldStyle: SxProps<Theme> = {
  flexGrow: 1,
  "& input": {
    textAlign: "center",
  },
  "& fieldset": {
    borderRadius: "0 !important",
  },
};

const ButtonStyle: SxProps<Theme> = {
  bgcolor: "#000",
  borderRadius: 0,
  "&:hover": {
    bgcolor: "#000",
  },
};

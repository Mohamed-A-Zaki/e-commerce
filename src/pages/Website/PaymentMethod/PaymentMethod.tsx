import { MenuItemStyle } from "../../../Styles/Styles";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import PriceButton from "../../../utility/PriceButton/PriceButton";
import MainButton from "../../../utility/MainButton/MainButton";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Box,
  Container,
} from "@mui/material";
import usePaymentMethod from "../../../Hooks/Payment/usePaymentMethod";


export default function PaymentMethod() {
  const {
    method,
    setMethod,
    totalAfterDiscount,
    addresses,
    address,
    setAddress,
    handelCreateCashOrder,
    loading
  } = usePaymentMethod();

  return (
    <Container fixed sx={{ my: 3, height: "66vh" }}>
      <SectionTitle>اختر طريقة الدفع</SectionTitle>

      <Card sx={{ my: 2 }}>
        <CardContent>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <FormControlLabel
              control={<Radio />}
              value="visa"
              label="الدفع عن طريق البطاقه الائتمانية"
            />
            <FormControlLabel
              control={<Radio />}
              value="cash"
              label="الدفع عند الاستلام"
            />
          </RadioGroup>

          <FormControl
            size="small"
            sx={{ my: 2, width: 1, "& fieldset": { borderRadius: 2 } }}
          >
            <InputLabel>العنوان</InputLabel>
            <Select
              value={address}
              label="حالة الطلب"
              onChange={(e) => setAddress(e.target.value)}
              sx={{ py: 0.5 }}
            >
              {addresses.map((ele) => {
                return (
                  <MenuItem sx={MenuItemStyle} key={ele._id} value={ele._id}>
                    {ele.alias}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>

      <Box display={"flex"} gap={1} justifyContent={"end"}>
        <PriceButton>{totalAfterDiscount}</PriceButton>
        <MainButton onClick={handelCreateCashOrder} disabled={loading}>
          {loading ? "جاري انشاء الطلب" :"اتمام الشراء"}
        </MainButton>
      </Box>
    </Container>
  );
}

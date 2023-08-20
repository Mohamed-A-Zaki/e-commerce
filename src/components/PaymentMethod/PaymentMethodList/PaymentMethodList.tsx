import {
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function PaymentMethodList() {
  return (
    <Card sx={{ my: 2 }}>
      <CardContent>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
          <FormControlLabel
            control={<Radio />}
            value="الدفع عن طريق البطاقه الائتمانية"
            label="الدفع عن طريق البطاقه الائتمانية"
          />
          <FormControlLabel
            control={<Radio />}
            value="الدفع عند الاستلام"
            label="الدفع عند الاستلام"
          />
        </RadioGroup>
      </CardContent>
    </Card>
  );
}

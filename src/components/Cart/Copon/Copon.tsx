import { Box, Button, SxProps, TextField, Theme } from "@mui/material";

import MainButton from "../../../utility/MainButton/MainButton";
import PriceButton from "../../../utility/PriceButton/PriceButton";
import { Link } from "react-router-dom";

export default function Copon() {
  return (
    <Box bgcolor={"#fff"} p={2} borderRadius={3}>
      <Box display={"flex"}>
        <TextField size="small" placeholder="كود الخصم" sx={TextFieldStyle} />
        <Button variant="contained" sx={ButtonStyle}>
          تطبيق
        </Button>
      </Box>

      <Box my={1.5}>
        <PriceButton>34000</PriceButton>
      </Box>

      <Link to={"/order/paymethod"}>
        <MainButton fullWidth>اتمام الشراء</MainButton>
      </Link>
    </Box>
  );
}

const TextFieldStyle: SxProps<Theme> = {
  flexGrow: 1,
  "& input": {
    textAlign: "center",
  },
  "& fieldset": {
    borderRadius: 0,
  },
};

const ButtonStyle: SxProps<Theme> = {
  bgcolor: "#000",
  borderRadius: 0,
  "&:hover": {
    bgcolor: "#000",
  },
};

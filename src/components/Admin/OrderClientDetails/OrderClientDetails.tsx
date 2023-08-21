import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { MenuItemStyle } from "../../../Styles/Styles";

import MainButton from "../../../utility/MainButton/MainButton";
import PriceButton from "../../../utility/PriceButton/PriceButton";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

export default function OrderClientDetails() {
  const [status, setStatus] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <Box bgcolor={"#fff"} p={2} borderRadius={3}>
      <SectionTitle>تفاصيل العميل</SectionTitle>

      <Box display={"flex"} alignItems={"center"} gap={1} my={0.5}>
        الاسم :<Typography color={"text.secondary"}>احمد عبداللة</Typography>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={1} my={0.5}>
        رقم الهاتف :
        <Typography color={"text.secondary"}>0021313432423</Typography>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={1} my={0.5}>
        الايميل :
        <Typography color={"text.secondary"}>ahmed@gmail.com</Typography>
      </Box>

      <PriceButton>المجموع 34000</PriceButton>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        my={0.5}
      >
        <FormControl
          size="small"
          sx={{ my: 2, flexGrow: 1, "& fieldset": { borderRadius: 2 } }}
        >
          <InputLabel>حالة الطلب</InputLabel>
          <Select
            value={status}
            label="حالة الطلب"
            onChange={handleChange}
            sx={{ py: 0.5 }}
          >
            <MenuItem sx={MenuItemStyle} value={"قيد التنفيذ"}>
              قيد التفيذ
            </MenuItem>
            <MenuItem sx={MenuItemStyle} value={"تم الانتهاء"}>
              تم الانتهاء
            </MenuItem>
            <MenuItem sx={MenuItemStyle} value={"الفاء"}>
              الفاء
            </MenuItem>
          </Select>
        </FormControl>
        <MainButton>حفظ</MainButton>
      </Box>
    </Box>
  );
}

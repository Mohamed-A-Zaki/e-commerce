import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";

import { MenuItemStyle } from "../../../Styles/Styles";

import MainButton from "../../../utility/MainButton/MainButton";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

export default function AdminAddSubCategory() {
  const [category, setCategory] = useState("التصنيف الاول");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>اضافه تصنيف فرعي جديد</SectionTitle>

      <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
        <TextField
          size="small"
          fullWidth
          placeholder="اسم التصنيف الفرعي"
          className="form-input"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
        />

        <FormControl
          size="small"
          fullWidth
          sx={{ "& fieldset": { borderRadius: 2 } }}
        >
          <Select value={category} onChange={handleChange}>
            <MenuItem sx={MenuItemStyle} value={"التصنيف الاول"}>
              التصنيف الاول
            </MenuItem>
            <MenuItem sx={MenuItemStyle} value={"التصنيف الثاني"}>
              التصنيف الثاني
            </MenuItem>
            <MenuItem sx={MenuItemStyle} value={"الصنيف الثالث"}>
              الصنيف الثالث
            </MenuItem>
            <MenuItem sx={MenuItemStyle} value={"الصنيف الرابع"}>
              الصنيف الرابع
            </MenuItem>
          </Select>
        </FormControl>

        <MainButton>حفظ التعديلات</MainButton>
      </Stack>
    </Stack>
  );
}

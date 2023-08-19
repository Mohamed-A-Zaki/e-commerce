import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  Theme,
} from "@mui/material";

export default function DropdowmMenu() {
  const [value, setValue] = useState("");

  return (
    <FormControl sx={{ width: 230 }} size="small">
      <InputLabel id="drop-down-menu">ترتيب حسب</InputLabel>
      <Select
        labelId="drop-down-menu"
        id="drop-down-menu"
        value={value}
        label="Age"
        onChange={(e) => setValue(e.target.value)}
      >
        <MenuItem value={""} sx={MenuItemStyle}>
          الاكثر مبيعا
        </MenuItem>
        <MenuItem value={""} sx={MenuItemStyle}>
          الاعلي تقييما
        </MenuItem>
        <MenuItem value={""} sx={MenuItemStyle}>
          السعر من الاقل للاعلي
        </MenuItem>
        <MenuItem value={""} sx={MenuItemStyle}>
          السعر من الاعلي للاقل
        </MenuItem>
      </Select>
    </FormControl>
  );
}

const MenuItemStyle: SxProps<Theme> = {
  bgcolor: "#fff !important",
  mx: 1.5,
  py: 1,
  fontSize: 14,
  borderBottom: 1,
  borderColor: "#ddd",
  borderRadius: 2,
  "&:last-child": {
    borderBottom: 0,
  },
  "&:hover": {
    bgcolor: "#000 !important",
    color: "#fff",
  },
};

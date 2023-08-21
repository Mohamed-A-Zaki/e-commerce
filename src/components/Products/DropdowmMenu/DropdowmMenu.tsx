import { useState } from "react";
import { MenuItemStyle } from "../../../Styles/Styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function DropdowmMenu() {
  const [value, setValue] = useState("");

  return (
    <FormControl sx={{ width: 230 }} size="small">
      <InputLabel id="drop-down-menu">ترتيب حسب</InputLabel>
      <Select
        labelId="drop-down-menu"
        id="drop-down-menu"
        value={value}
        label="ترتيب حسب"
        onChange={(e) => setValue(e.target.value)}
      >
        <MenuItem sx={MenuItemStyle} value={"الاكثر مبيعا"}>
          الاكثر مبيعا
        </MenuItem>
        <MenuItem sx={MenuItemStyle} value={"الاعلي تقييما"}>
          الاعلي تقييما
        </MenuItem>
        <MenuItem sx={MenuItemStyle} value={"السعر من الاقل للاعلي"}>
          السعر من الاقل للاعلي
        </MenuItem>
        <MenuItem sx={MenuItemStyle} value={"السعر من الاعلي للاقل"}>
          السعر من الاعلي للاقل
        </MenuItem>
      </Select>
    </FormControl>
  );
}

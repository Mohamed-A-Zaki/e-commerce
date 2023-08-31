import { MenuItemStyle } from "../../../Styles/Styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSort } from "../../../store/products/FilterProductObjectSlice/FilterProductObjectSlice";

export default function DropdowmMenu() {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.FilterProductObject);

  return (
    <FormControl sx={{ width: 230 }} size="small">
      <InputLabel id="drop-down-menu">ترتيب حسب</InputLabel>
      <Select
        labelId="drop-down-menu"
        id="drop-down-menu"
        value={sort}
        label="ترتيب حسب"
        onChange={(e) => dispatch(setSort(e.target.value))}
      >
        <MenuItem sx={MenuItemStyle} value={"-sold"}>
          الاكثر مبيعا
        </MenuItem>
        <MenuItem sx={MenuItemStyle} value={"-ratingsQuantity"}>
          الاعلي تقييما
        </MenuItem>
        <MenuItem sx={MenuItemStyle} value={"+price"}>
          السعر من الاقل للاعلي
        </MenuItem>
        <MenuItem sx={MenuItemStyle} value={"-price"}>
          السعر من الاعلي للاقل
        </MenuItem>
      </Select>
    </FormControl>
  );
}

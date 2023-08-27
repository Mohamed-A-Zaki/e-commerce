import { useEffect } from "react";
import { MenuItemStyle } from "../../../Styles/Styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSort } from "../../../store/FilterProductObjectSlice/FilterProductObjectSlice";
import { filterProducts } from "../../../store/ProductSlice/ProductSlice";

export default function DropdowmMenu() {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state) => state.FilterProductObject);
  const filter_object = useAppSelector((state) => state.FilterProductObject);
  const { page } = useAppSelector((state) => state.Pagination);

  useEffect(() => {
    dispatch(filterProducts({...filter_object, page}));
  }, [dispatch, filter_object, page]);

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

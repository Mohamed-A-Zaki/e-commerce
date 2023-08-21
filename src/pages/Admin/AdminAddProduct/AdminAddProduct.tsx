import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import image from "../../../assets/avatar.png";
import { MenuItemStyle } from "../../../Styles/Styles";

import MultiSelect from "react-select";
import makeAnimated from "react-select/animated";

import MainButton from "../../../utility/MainButton/MainButton";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import ColorItem from "../../../utility/ColorItem/ColorItem";

const animatedComponents = makeAnimated();

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function AdminAddProduct() {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const handleChangeCat = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  const handleChangeBrand = (event: SelectChangeEvent) => {
    setBrand(event.target.value as string);
  };

  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>اضافه تصنيف فرعي جديد</SectionTitle>

      <Typography color={"text.secondary"}>صورة المنتج</Typography>

      <Box component={"img"} src={image} width={120} />

      <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
        <TextField
          size="small"
          fullWidth
          placeholder="اسم المنتج"
          className="form-input"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
        />

        <TextField
          multiline
          minRows={3}
          fullWidth
          sx={{ mt: 2 }}
          placeholder="وصف المنتج"
        />

        <TextField
          type="number"
          size="small"
          fullWidth
          placeholder="السعر قبل الخصم"
          className="form-input"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
        />

        <TextField
          type="number"
          size="small"
          fullWidth
          placeholder="سعر المنتج"
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
          <InputLabel>التصنيف الرئيسي</InputLabel>
          <Select
            value={category}
            label="التصنيف الرئيسي"
            onChange={handleChangeCat}
          >
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

        <FormControl
          size="small"
          fullWidth
          sx={{ "& fieldset": { borderRadius: 2 } }}
        >
          <InputLabel>الماركة</InputLabel>
          <Select value={brand} label="الماركة" onChange={handleChangeBrand}>
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

        <MultiSelect
          className="multi-select"
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options}
        />

        <Box alignSelf={"flex-start"}>
          <Typography color={"text.secondary"}>صورة المنتج</Typography>

          <Box display={"flex"} alignItems={"center"} gap={1}>
            <ColorItem color="#f00" />
            <ColorItem color="#fff" />
            <ColorItem color="#000" />

            <Box
              width={30}
              height={30}
              borderRadius={"50%"}
              border={1}
              borderColor={"#ddd"}
              fontSize={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"flex-end"}
              sx={{ cursor: "pointer" }}
            >
              +
            </Box>
          </Box>
        </Box>

        <MainButton>حفظ التعديلات</MainButton>
      </Stack>
    </Stack>
  );
}

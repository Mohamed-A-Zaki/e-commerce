import { Box, Stack, TextField, Typography } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

import image from "../../../assets/avatar.png";
import MainButton from "../../../utility/MainButton/MainButton";

export default function AdminAddCategory() {
  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>اضف تصنيف جديد</SectionTitle>

      <Typography color={"text.secondary"}>صورة التصنيف</Typography>

      <Box component={"img"} src={image} width={120} />

      <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
        <TextField
          size="small"
          fullWidth
          placeholder="اسم التصنيف"
          className="form-input"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ "& input": { textAlign: "right" } }}
        />

        <MainButton>حفظ التعديلات</MainButton>
      </Stack>
    </Stack>
  );
}

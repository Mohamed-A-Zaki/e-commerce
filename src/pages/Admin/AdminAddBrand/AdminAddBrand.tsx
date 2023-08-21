import { Box, Stack, TextField, Typography } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

import image from "../../../assets/avatar.png";
import MainButton from "../../../utility/MainButton/MainButton";

export default function AdminAddBrand() {
  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>اضف ماركه جديده</SectionTitle>

      <Typography color={"text.secondary"}>صورة الماركة</Typography>

      <Box component={"img"} src={image} width={120} />

      <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
        <TextField
          size="small"
          fullWidth
          placeholder="اسم الماركة"
          className="form-input"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
        />

        <MainButton>حفظ التعديلات</MainButton>
      </Stack>
    </Stack>
  );
}

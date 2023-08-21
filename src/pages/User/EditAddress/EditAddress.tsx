import { Stack, TextField } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import MainButton from "../../../utility/MainButton/MainButton";

export default function EditAddress() {
  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>اضافة عنوان جديد</SectionTitle>

      <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
        <TextField
          size="small"
          value={"المنزل"}
          fullWidth
          placeholder="تسمية العنوان مثلا(المنزل - العمل)"
          className="form-input"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
        />

        <TextField
          multiline
          value={"القاهرة ٦ اكتوبر"}
          minRows={3}
          fullWidth
          sx={{ mt: 2 }}
          placeholder="العنوان بالتفصيل"
        />

        <TextField
          size="small"
          value={"01213621735"}
          fullWidth
          placeholder="رقم الهاتف"
          className="form-input"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            "& input": { textAlign: "right", bgcolor: "#f1f1f1" },
          }}
        />

        <MainButton>حفظ تعديل العنوان</MainButton>
      </Stack>
    </Stack>
  );
}

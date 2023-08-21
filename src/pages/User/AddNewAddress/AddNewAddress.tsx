import { Stack, TextField } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import MainButton from "../../../utility/MainButton/MainButton";

export default function AddNewAddress() {
  return (
    <Stack spacing={2} my={2}>
      <SectionTitle>اضافة عنوان جديد</SectionTitle>

      <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
        <TextField
          size="small"
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
          minRows={3}
          fullWidth
          sx={{ mt: 2 }}
          placeholder="العنوان بالتفصيل"
        />

        <TextField
          size="small"
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

        <MainButton>اضافة عنوان</MainButton>
      </Stack>
    </Stack>
  );
}

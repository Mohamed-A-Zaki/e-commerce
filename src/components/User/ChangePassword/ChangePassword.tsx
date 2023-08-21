import { Stack, TextField } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import MainButton from "../../../utility/MainButton/MainButton";

export default function ChangePassword() {
  return (
    <>
      <SectionTitle>تغير كملة المرور</SectionTitle>

      <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
        <TextField
          type="password"
          size="small"
          fullWidth
          placeholder="ادخل كلمة المرور القديمة"
          className="form-input"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
        />

        <TextField
          type="password"
          size="small"
          fullWidth
          placeholder="ادخل كلمة المرور الجديدة"
          className="form-input"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
        />

        <MainButton>حفظ كلمة السر</MainButton>
      </Stack>
    </>
  );
}

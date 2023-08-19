import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Box component={"form"} textAlign={"center"} my={5} height={"66vh"}>
      <Container fixed>
        <Typography variant="h5" fontWeight={"bold"} mb={2}>
          تسجيل الدخول
        </Typography>

        <Stack spacing={2} alignItems={"center"} width={375} m={"auto"}>
          <TextField
            type="text"
            size="small"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            fullWidth
            className="form-input"
            placeholder="اسم المستخدم..."
          />

          <TextField
            type="email"
            size="small"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            fullWidth
            className="form-input"
            placeholder="الايميل..."
          />

          <TextField
            type="email"
            size="small"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            fullWidth
            className="form-input"
            placeholder="كلمة السر..."
          />

          <Button type="submit" fullWidth className="submit-btn">
            تسجيل الحساب
          </Button>

          <Typography>
            لديك حساب بالفعل؟
            <Box component={Link} to="/login" color="error.main" mx={1}>
              اضغط هنا
            </Box>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

import {
  Box,
  Button,
  Container,
  Stack,
  SxProps,
  TextField,
  Theme,
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
            sx={TextFieldStyle}
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
            sx={TextFieldStyle}
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
            sx={TextFieldStyle}
            placeholder="كلمة السر..."
          />

          <Button type="submit" fullWidth sx={ButtonStyle}>
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

const TextFieldStyle: SxProps<Theme> = {
  "& input": {
    border: 1,
    bgcolor: "#fff",
    borderColor: "#888",
    borderRadius: 2,
    "&:focus": {
      borderColor: "#000",
    },
    textAlign: "center !important",
    py: 0.8,
  },
};

const ButtonStyle: SxProps<Theme> = {
  bgcolor: "#000 !important",
  color: "#fff !important",
  borderRadius: 3,
  p: 1,
  "&:hover": {
    color: "#888 !important",
  },
};

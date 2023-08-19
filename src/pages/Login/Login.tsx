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

export default function Login() {
  return (
    <Box component={"form"} textAlign={"center"} my={5} height={"66vh"}>
      <Container fixed>
        <Typography variant="h5" fontWeight={"bold"} mb={2}>
          تسجيل الدخول
        </Typography>
        
        <Stack spacing={2} alignItems={"center"} width={375} m={"auto"}>
          <TextField
            type="email"
            size="small"
            fullWidth
            sx={TextFieldStyle}
            placeholder="الايميل..."
          />

          <TextField
            type="email"
            size="small"
            fullWidth
            sx={TextFieldStyle}
            placeholder="كلمة السر..."
          />

          <Button type="submit" fullWidth sx={ButtonStyle}>
            تسجيل الدخول
          </Button>

          <Typography>
            ليس لديك حساب؟
            <Box component={Link} to="/register" color="error.main" mx={1}>
              اضغط هنا
            </Box>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

const TextFieldStyle: SxProps<Theme> = {
  bgcolor: "#fff",
  borderRadius: 2,
  "& input": {
    textAlign: "center !important",
    py: 0.8,
  },
  "& .MuiOutlinedInput-root > fieldset": {
    borderRadius: 2,
    borderColor: "#888",
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

import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import useLogin from "../../../Hooks/Auth/useLogin";

export default function Login() {
  const { initialValues, validationSchema, onSubmit } = useLogin();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ getFieldProps, touched, errors, isSubmitting }) => (
        <Box component={Form} textAlign={"center"} my={5} height={"66vh"}>
          <Container fixed>
            <Typography variant="h5" fontWeight={"bold"} mb={2}>
              تسجيل دخول
            </Typography>

            <Stack spacing={2} alignItems={"center"} width={375} m={"auto"}>
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
                {...getFieldProps("email")}
                error={!!(errors.email && touched.email)}
                helperText={errors.email && touched.email && errors.email}
              />

              <TextField
                type="password"
                size="small"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                className="form-input"
                placeholder="كلمة السر..."
                {...getFieldProps("password")}
                error={!!(errors.password && touched.password)}
                helperText={
                  errors.password && touched.password && errors.password
                }
              />

              <Button
                type="submit"
                fullWidth
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري تسجيل الدخول" : "تسجيل دخول"}
              </Button>

              <Typography>
                ليس لديك حساب؟
                <Box component={Link} to="/register" color="error.main" mx={1}>
                  اضغط هنا
                </Box>
              </Typography>
            </Stack>

            <Box
              component={Link}
              to="/forget-password"
              color="error.main"
              display={"block"}
              my={3}
            >
              نسيت كلمة السر؟
            </Box>

            <Box my={5} display={"flex"} gap={3}>
              <Link to="/admin/allproducts">الدخول ادمن</Link>
              <Link to="/user/allorders">الدخول مستخدم</Link>
            </Box>
          </Container>
        </Box>
      )}
    </Formik>
  );
}

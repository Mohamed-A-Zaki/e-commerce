import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import useRegister from "../../../Hooks/Auth/useRegister";


export default function Register() {
  const { initialValues, validationSchema, onSubmit } = useRegister();

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
              تسجيل حساب جديد
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
                {...getFieldProps("name")}
                error={!!(errors.name && touched.name)}
                helperText={errors.name && touched.name && errors.name}
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
                {...getFieldProps("email")}
                error={!!(errors.email && touched.email)}
                helperText={errors.email && touched.email && errors.email}
              />

              <TextField
                type="tel"
                size="small"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                className="form-input"
                placeholder="رقم الهاتف..."
                {...getFieldProps("phone")}
                error={!!(errors.phone && touched.phone)}
                helperText={errors.phone && touched.phone && errors.phone}
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

              <TextField
                type="password"
                size="small"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                className="form-input"
                placeholder="تأكيد كلمة السر..."
                {...getFieldProps("passwordConfirm")}
                error={!!(errors.passwordConfirm && touched.passwordConfirm)}
                helperText={
                  errors.passwordConfirm &&
                  touched.passwordConfirm &&
                  errors.passwordConfirm
                }
              />

              <Button
                type="submit"
                fullWidth
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري تسجيل حساب جديد" : "تسجيل الحساب "}
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
      )}
    </Formik>
  );
}

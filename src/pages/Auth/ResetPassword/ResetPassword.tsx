import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import useResetPassword from "../../../Hooks/useResetPassword";

export default function ResetPassword() {
  const { initialValues, validationSchema, onSubmit } = useResetPassword();

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
                type="password"
                size="small"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                className="form-input"
                placeholder="كلمة السر..."
                {...getFieldProps("newPassword")}
                error={!!(errors.newPassword && touched.newPassword)}
                helperText={
                  errors.newPassword &&
                  touched.newPassword &&
                  errors.newPassword
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
                {...getFieldProps("passwrdConfirm")}
                error={!!(errors.passwrdConfirm && touched.passwrdConfirm)}
                helperText={
                  errors.passwrdConfirm &&
                  touched.passwrdConfirm &&
                  errors.passwrdConfirm
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
            </Stack>
          </Container>
        </Box>
      )}
    </Formik>
  );
}

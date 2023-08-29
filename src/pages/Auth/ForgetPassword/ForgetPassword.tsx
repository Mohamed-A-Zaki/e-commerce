import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import useForgetPasssword from "../../../Hooks/Auth/useForgetPasssword";


export default function ForgetPassword() {
  const { initialValues, validationSchema, onSubmit } = useForgetPasssword();

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
              نسيت كلمة السر
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

              <Button
                type="submit"
                fullWidth
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري الارسال" : "ارسال الكود"}
              </Button>
            </Stack>
          </Container>
        </Box>
      )}
    </Formik>
  );
}

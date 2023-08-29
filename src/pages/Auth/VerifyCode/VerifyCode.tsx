import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import useVerifyCode from "../../../Hooks/useVerifyCode";

export default function VerifyCode() {
  const { validationSchema, initialValues, onSubmit } = useVerifyCode();

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
              ادخل الكود
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
                placeholder="الكود"
                {...getFieldProps("resetCode")}
                error={!!(errors.resetCode && touched.resetCode)}
                helperText={
                  errors.resetCode && touched.resetCode && errors.resetCode
                }
              />

              <Button
                type="submit"
                fullWidth
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري التاكيد" : "تاكيد"}
              </Button>
            </Stack>
          </Container>
        </Box>
      )}
    </Formik>
  );
}

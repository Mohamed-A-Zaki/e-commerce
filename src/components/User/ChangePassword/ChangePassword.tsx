import { Form, Formik } from "formik";
import { Stack, TextField } from "@mui/material";

import MainButton from "../../../utility/MainButton/MainButton";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import useChangePassword from "../../../Hooks/user/useChangePassword";

export default function ChangePassword() {
  const { initialValues, validationSchema, onSubmit } = useChangePassword();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ getFieldProps, isSubmitting, errors, touched }) => (
        <Form>
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
              {...getFieldProps("currentPassword")}
              error={!!(touched.currentPassword && errors.currentPassword)}
              helperText={
                touched.currentPassword &&
                errors.currentPassword &&
                errors.currentPassword
              }
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
              {...getFieldProps("password")}
              error={!!(touched.password && errors.password)}
              helperText={
                touched.password && errors.password && errors.password
              }
            />

            <TextField
              type="password"
              size="small"
              fullWidth
              placeholder="تاكيد كلمة المرور الجديدة"
              className="form-input"
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
              {...getFieldProps("passwordConfirm")}
              error={!!(touched.passwordConfirm && errors.passwordConfirm)}
              helperText={
                touched.passwordConfirm &&
                errors.passwordConfirm &&
                errors.passwordConfirm
              }
            />

            <MainButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "جاري تعديل كلمة المرور" : "تغير كلمة المرور"}
            </MainButton>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

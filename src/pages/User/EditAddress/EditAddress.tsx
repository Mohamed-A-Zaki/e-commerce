import { Stack, TextField } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import MainButton from "../../../utility/MainButton/MainButton";
import useEditAddress from "../../../Hooks/Address/useEditAddress";
import { Form, Formik } from "formik";

export default function EditAddress() {
  const { initialValues, validationSchema, onSubmit } = useEditAddress();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ getFieldProps, errors, touched, isSubmitting }) => (
        <Form>
          <Stack spacing={2} my={2}>
            <SectionTitle>تعديل العنوان</SectionTitle>

            <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
              <TextField
                size="small"
                fullWidth
                placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                className="form-input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                {...getFieldProps("alias")}
                error={!!(errors.alias && touched.alias)}
                helperText={errors.alias && touched.alias && errors.alias}
              />

              <TextField
                multiline
                minRows={3}
                fullWidth
                sx={{ mt: 2 }}
                placeholder="العنوان بالتفصيل"
                {...getFieldProps("details")}
                error={!!(errors.details && touched.details)}
                helperText={errors.details && touched.details && errors.details}
              />

              <TextField
                size="small"
                fullWidth
                placeholder="رقم الهاتف"
                className="form-input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  "& input": { textAlign: "right", bgcolor: "#f1f1f1" },
                }}
                {...getFieldProps("phone")}
                error={!!(errors.phone && touched.phone)}
                helperText={errors.phone && touched.phone && errors.phone}
              />

              <MainButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "جاري التعديل" : "تعديل العنوان"}
              </MainButton>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

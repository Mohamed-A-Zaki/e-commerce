import { Form, Formik } from "formik";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import { TextField } from "@mui/material";
import MainButton from "../../../utility/MainButton/MainButton";
import useEditProfile from "../../../Hooks/user/useEditProfile";

export default function UserEditProfile() {
  const { initialValues, validationSchema, onSubmit } = useEditProfile();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting, getFieldProps }) => (
        <Box component={Form}>
          <Stack spacing={2} my={2}>
            <SectionTitle>اضف كوبون جديد</SectionTitle>

            <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
              <TextField
                size="small"
                fullWidth
                type={"text"}
                placeholder="الكود"
                className="form-input"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                {...getFieldProps("name")}
                error={!!(errors.name && touched.name)}
                helperText={errors.name && touched.name && errors.name}
              />

              <TextField
                size="small"
                fullWidth
                type="tel"
                placeholder="نسبة الخصم"
                className="form-input"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                {...getFieldProps("phone")}
                error={!!(errors.phone && touched.phone)}
                helperText={errors.phone && touched.phone && errors.phone}
              />

              <MainButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "جاري التعديل" : "تعديل البيانات"}
              </MainButton>
            </Stack>
          </Stack>
        </Box>
      )}
    </Formik>
  );
}

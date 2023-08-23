import { Formik, Form } from "formik";
import { Box, Stack, TextField, Typography } from "@mui/material";

import useAddCategory from "../../../Hooks/useAddCategory";
import MainButton from "../../../utility/MainButton/MainButton";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

export default function AdminAddCategory() {
  const {
    image,
    inputRef,
    validationSchema,
    initialValues,
    onSubmit,
    handleChange,
  } = useAddCategory();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ getFieldProps, errors, touched, isSubmitting, handleBlur }) => (
        <Box component={Form}>
          <Stack spacing={2} my={2}>
            <SectionTitle>اضف تصنيف جديد</SectionTitle>

            <Typography>صورة التصنيف</Typography>

            <Box>
              <Box
                component={"label"}
                htmlFor="img-file"
                sx={{ cursor: "pointer" }}
              >
                <Box component={"img"} src={image as string} width={120} />
              </Box>
              <TextField
                type="file"
                id="img-file"
                sx={{ display: "none" }}
                inputRef={inputRef}
                name="image"
                onBlur={handleBlur}
                onChange={handleChange as () => void}
                error={!!(errors.image && touched.image)}
                helperText={errors.image && touched.image && errors.image}
              />
            </Box>

            <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
              <TextField
                size="small"
                fullWidth
                placeholder="اسم التصنيف"
                className="form-input"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                {...getFieldProps("name")}
                error={!!(errors.name && touched.name)}
                helperText={errors.name && touched.name && errors.name}
              />

              <MainButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "جاري التحميل" : "حفظ التعديلات"}
              </MainButton>
            </Stack>
          </Stack>
        </Box>
      )}
    </Formik>
  );
}

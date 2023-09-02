import { Form, Formik } from "formik";
import { Box, Stack, TextField } from "@mui/material";

import MainButton from "../../../utility/MainButton/MainButton";
import useEditCoupon from "../../../Hooks/Coupon/useEditCoupon";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

export default function AdminEditCoupon() {
  const { validationSchema, initialValues, onSubmit } = useEditCoupon();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ errors, touched, isSubmitting, handleChange, values }) => (
        <Box component={Form}>
          <Stack spacing={2} my={2}>
            <SectionTitle>تعديل كوبون</SectionTitle>

            <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
              <TextField
                size="small"
                fullWidth
                placeholder="الكود"
                className="form-input"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                name="name"
                value={values.name}
                onChange={handleChange}
                error={!!(errors.name && touched.name)}
                helperText={errors.name && touched.name && errors.name}
              />

              <TextField
                size="small"
                fullWidth
                type={"date"}
                placeholder="تاريخ الانتهاء"
                className="form-input"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                name="expire"
                value={values.expire}
                onChange={handleChange}
                error={!!(errors.expire && touched.expire)}
                helperText={errors.expire && touched.expire && errors.expire}
              />

              <TextField
                size="small"
                fullWidth
                type="number"
                placeholder="نسبة الخصم"
                className="form-input"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                name="discount"
                value={values.discount}
                onChange={handleChange}
                error={!!(errors.discount && touched.discount)}
                helperText={
                  errors.discount && touched.discount && errors.discount
                }
              />

              <MainButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "جاري التعديل" : "تعديل كوبون"}
              </MainButton>
            </Stack>
          </Stack>
        </Box>
      )}
    </Formik>
  );
}

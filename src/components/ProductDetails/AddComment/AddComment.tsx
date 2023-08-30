import { Form, Formik } from "formik";

import {
  Box,
  FormHelperText,
  Rating,
  TextField,
  Typography,
} from "@mui/material";

import useAddReview from "../../../Hooks/Review/useAddReview";
import MainButton from "../../../utility/MainButton/MainButton";

export default function AddComment() {
  const { initialValues, validationSchema, onSubmit, user } = useAddReview();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, handleChange, isSubmitting }) => (
        <Box component={Form} my={2} px={3}>
          <Typography sx={{ display: "flex", gap: 1, fontWeight: "bold" }}>
            {user.name}
            <Rating
              precision={0.5}
              sx={{ direction: "ltr" }}
              name="rating"
              value={Number(values.rating)}
              onChange={handleChange}
            />
          </Typography>
          {errors.rating && touched.rating && (
            <FormHelperText className="Mui-error">
              {errors.rating}
            </FormHelperText>
          )}

          <TextField
            multiline
            minRows={2}
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "#F9F9F9",
              borderRadius: 2,
              "& fieldset": { borderRadius: 2 },
            }}
            placeholder="اكتب تعليقك...."
            name="review"
            value={values.review}
            onChange={handleChange}
            error={!!(errors.review && touched.review)}
            helperText={errors.review && touched.review && errors.review}
          />

          <Box mt={1} textAlign={"left"}>
            <MainButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "جاري الاضافة" : "اضافة تعليق"}
            </MainButton>
          </Box>
        </Box>
      )}
    </Formik>
  );
}

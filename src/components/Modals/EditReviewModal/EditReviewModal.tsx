import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Rating,
  TextField,
} from "@mui/material";
import useEditReviewModal from "../../../Hooks/Review/useEditReviewModal";
import { Form, Formik } from "formik";

export default function EditReviewModal() {
  const {
    open,
    handleClose,
    handleEditReview,
    initialValues,
    validationSchema,
  } = useEditReviewModal();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleEditReview}
      >
        {({ values, errors, touched, handleChange, isSubmitting }) => (
          <>
            <Form>
              <DialogTitle id="alert-dialog-title">تعديل تقييم</DialogTitle>
              <DialogContent>
                <Rating
                  precision={0.5}
                  sx={{ direction: "ltr" }}
                  name="rating"
                  value={Number(values.rating)}
                  onChange={handleChange}
                />
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
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>الغاء</Button>
                <Button type="submit" autoFocus disabled={isSubmitting}>
                  {isSubmitting ? "جاري التعديل" : "تعديل"}
                </Button>
              </DialogActions>
            </Form>
          </>
        )}
      </Formik>
    </Dialog>
  );
}

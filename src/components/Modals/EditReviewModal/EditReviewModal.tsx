import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Rating,
  Slide,
  TextField,
} from "@mui/material";
import useEditReviewModal from "../../../Hooks/Review/useEditReviewModal";
import { Form, Formik } from "formik";
import ModalCancelButton from "../../../utility/Modal/ModalCancelButton/ModalCancelButton";
import ModalEditButton from "../../../utility/Modal/ModalEditButton/ModalEditButton";

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
      TransitionComponent={Slide}
      fullWidth
      maxWidth="sm"
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
              <DialogActions sx={{ gap: 1 }}>
                <ModalCancelButton onClick={handleClose} />
                <ModalEditButton disabled={isSubmitting} />
              </DialogActions>
            </Form>
          </>
        )}
      </Formik>
    </Dialog>
  );
}

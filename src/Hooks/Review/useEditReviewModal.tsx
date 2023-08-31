import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  closeEditReviewModal,
  setEditReviewId,
} from "../../store/EditReviewModalSlice/EditReviewModalSlice";
import * as yup from "yup";
import { RatingFormDataType } from "../../types/Rating/Rating";
import { editReview } from "../../store/RatingSlice/RatingSlice";
import { FormikHelpers } from "formik";

const useEditReviewModal = () => {
  const dispatch = useAppDispatch();
  const { open, reviewId } = useAppSelector((state) => state.EditReview);

  const { spescificProduct } = useAppSelector((state) => state.Products);

  const review = spescificProduct?.reviews.find(
    (review) => review._id === reviewId
  );

  const handleClose = () => {
    dispatch(closeEditReviewModal());
    dispatch(setEditReviewId(""));
  };

  const initialValues: RatingFormDataType = {
    rating: review?.rating.toString() || "",
    review: review?.review || "",
  };

  const validationSchema = yup.object({
    rating: yup.string().required("هذا الحقل مطلوب"),
    review: yup.string().required("هذا الحقل مطلوب"),
  });

  const handleEditReview = (
    values: RatingFormDataType,
    { setSubmitting }: FormikHelpers<RatingFormDataType>
  ) => {
    dispatch(editReview({ rate_id: reviewId, values }))
      .unwrap()
      .then(() => {
        toast.success("تم التعديل بنجاح");
        handleClose();
      })
      .catch(() => {
        toast.error("يوجد خطا ما");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return {
    open,
    handleClose,
    handleEditReview,
    initialValues,
    validationSchema,
  };
};

export default useEditReviewModal;

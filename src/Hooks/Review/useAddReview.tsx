import * as yup from "yup";
import { RatingFormDataType } from "../../types/Rating/Rating";
import { createReviw } from "../../store/RatingSlice/RatingSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toast } from "react-toastify";
import { FormikHelpers } from "formik";

const useAddReview = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.Auth);
  const { spescificProduct } = useAppSelector((state) => state.Products);

  const initialValues: RatingFormDataType = {
    review: "",
    rating: "",
  };

  const validationSchema = yup.object({
    review: yup.string().required("الرجاء ادخال تعليقك"),
    rating: yup.string().required("الرجاء ادخال تقييمك"),
  });

  const onSubmit = (
    values: RatingFormDataType,
    { setSubmitting, setFieldValue, setTouched }: FormikHelpers<RatingFormDataType>
  ) => {
    dispatch(createReviw({ prod_id: spescificProduct?._id || "", values }))
      .unwrap()
      .then(() => {
        toast.success("تمت الاضافة بنجاح");
        setFieldValue("review", "");
        setFieldValue("rating", "");
        setTouched({ review: false, rating: false });
      })
      .catch((error) => {
        const code = Number((error as Error).message.split(" ").slice(-1)[0]);
        if (code === 403) {
          toast.error("غير مسموح للادمن باضافة تقييم");
        } else if (code === 400) {
          toast.error("لقد قمت بالتقييم بالفعل");
        } else {
          toast.error("يوجد خطا ما");
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return { initialValues, validationSchema, onSubmit, user };
};

export default useAddReview;

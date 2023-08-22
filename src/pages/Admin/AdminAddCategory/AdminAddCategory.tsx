import { useRef, useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";

import * as yup from "yup";
import { Formik, Form } from "formik";

import { useAppDispatch } from "../../../store/hooks";
import { createCategory } from "../../../store/CategorySlice/CategorySlice";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import avatar from "../../../assets/avatar.png";
import MainButton from "../../../utility/MainButton/MainButton";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

export default function AdminAddCategory() {
  const [image, setImage] = useState(avatar);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const naviagte = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        image: "",
      }}
      validationSchema={yup.object({
        name: yup.string().required("هذا الحقل مطلوب"),
        image: yup.string().optional(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const formData = new FormData();

        formData.append("name", values.name);
        formData.append("image", inputRef.current?.files![0] as File);

        dispatch(createCategory(formData))
          .unwrap()
          .then(() => naviagte("/allcategory"))
          .catch(() => toast.error("يوجد خطا ما..."))
          .finally(() => setSubmitting(false));
      }}
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
                <Box component={"img"} src={image} width={120} />
              </Box>
              <TextField
                type="file"
                id="img-file"
                sx={{ display: "none" }}
                inputRef={inputRef}
                name="image"
                onBlur={handleBlur}
                onChange={handleChange}
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

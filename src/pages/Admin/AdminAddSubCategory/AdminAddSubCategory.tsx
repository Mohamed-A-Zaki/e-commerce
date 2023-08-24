import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import { MenuItemStyle } from "../../../Styles/Styles";
import MainButton from "../../../utility/MainButton/MainButton";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

import { Form, Formik } from "formik";
import { useAppSelector } from "../../../store/hooks";
import useAddSubCategory from "../../../Hooks/useAddSubCategory";

export default function AdminAddSubCategory() {
  const { categories } = useAppSelector((state) => state.Categories);
  const { initialValues, onSubmit, validationSchema } = useAddSubCategory();

  const render_categories = () => {
    return categories.map((category) => (
      <MenuItem key={category._id} sx={MenuItemStyle} value={category._id}>
        {category.name}
      </MenuItem>
    ));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ getFieldProps, touched, errors, isSubmitting }) => (
        <Form>
          <Stack spacing={2} my={2}>
            <SectionTitle>اضافه تصنيف فرعي جديد</SectionTitle>

            <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
              <TextField
                size="small"
                fullWidth
                placeholder="اسم التصنيف الفرعي"
                className="form-input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                {...getFieldProps("name")}
                error={!!(errors.name && touched.name)}
                helperText={errors.name && touched.name && errors.name}
              />

              <FormControl
                size="small"
                fullWidth
                sx={{ "& fieldset": { borderRadius: 2 } }}
                error={!!(errors.category && touched.category)}
              >
                <Select displayEmpty {...getFieldProps("category")}>
                  <MenuItem sx={MenuItemStyle} value={""}>
                    اختر تصنيف
                  </MenuItem>
                  {render_categories()}
                </Select>

                {errors.category && touched.category && (
                  <FormHelperText>{errors.category}</FormHelperText>
                )}
              </FormControl>
              <MainButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "جاري التحميل" : "حفظ التعديلات"}
              </MainButton>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

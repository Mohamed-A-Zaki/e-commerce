import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MenuItemStyle } from "../../../Styles/Styles";

import { Form, Formik } from "formik";
import MultiSelect from "react-select";
import { CompactPicker } from "react-color";
import makeAnimated from "react-select/animated";

import DropZone from "../../../utility/DropZone/DropZone";
import ColorItem from "../../../utility/ColorItem/ColorItem";
import MainButton from "../../../utility/MainButton/MainButton";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import useEditProduct from "../../../Hooks/Product/useEditProduct";
const animatedComponents = makeAnimated();

export default function AdminEditProduct() {
  const {
    initialValues,
    onSubmit,
    validationSchema,
    openColorPicker,
    ToogleColorPicker,
    categories,
    brands,
    handleGetSubCategories,
    subCategories,
  } = useEditProduct();

  const render_categories = () => {
    return categories.map((category) => (
      <MenuItem key={category._id} sx={MenuItemStyle} value={category._id}>
        {category.name}
      </MenuItem>
    ));
  };

  const render_brands = () => {
    return brands.map((brand) => (
      <MenuItem key={brand._id} sx={MenuItemStyle} value={brand._id}>
        {brand.name}
      </MenuItem>
    ));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({
        getFieldProps,
        errors,
        touched,
        isSubmitting,
        setFieldValue,
        handleBlur,
        values,
      }) => (
        <Form noValidate>
          <Stack spacing={2} my={2}>
            <SectionTitle>اضافه تصنيف فرعي جديد</SectionTitle>

            <Typography>صورة المنتج</Typography>

            <Box width={700} maxWidth={"100%"}>
              <DropZone setFieldValue={setFieldValue} />

              {errors.images && touched.images && (
                <FormHelperText className="Mui-error">
                  {errors.images}
                </FormHelperText>
              )}
            </Box>

            <Stack spacing={2} alignItems={"end"} width={700} maxWidth={"100%"}>
              <TextField
                size="small"
                fullWidth
                placeholder="اسم المنتج"
                className="form-input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                {...getFieldProps("title")}
                error={!!(errors.title && touched.title)}
                helperText={errors.title && touched.title && errors.title}
              />

              <TextField
                multiline
                minRows={3}
                fullWidth
                sx={{ mt: 2 }}
                placeholder="وصف المنتج"
                {...getFieldProps("description")}
                error={!!(errors.description && touched.description)}
                helperText={
                  errors.description &&
                  touched.description &&
                  errors.description
                }
              />

              <TextField
                type="number"
                size="small"
                fullWidth
                placeholder="السعر قبل الخصم"
                className="form-input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                {...getFieldProps("price")}
                error={!!(errors.price && touched.price)}
                helperText={errors.price && touched.price && errors.price}
              />

              <TextField
                type="number"
                size="small"
                fullWidth
                placeholder="السعر بعد الخصم"
                className="form-input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                {...getFieldProps("price_after_descount")}
                error={
                  !!(
                    errors.price_after_descount && touched.price_after_descount
                  )
                }
                helperText={
                  errors.price_after_descount &&
                  touched.price_after_descount &&
                  errors.price_after_descount
                }
              />

              <TextField
                type="number"
                size="small"
                fullWidth
                placeholder="الكمية المتاحة"
                className="form-input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{ "& input": { textAlign: "right", bgcolor: "#f1f1f1" } }}
                {...getFieldProps("quantity")}
                error={!!(errors.quantity && touched.quantity)}
                helperText={
                  errors.quantity && touched.quantity && errors.quantity
                }
              />

              <FormControl
                size="small"
                fullWidth
                sx={{ "& fieldset": { borderRadius: 2 } }}
                error={!!(errors.category && touched.category)}
              >
                <Select
                  displayEmpty
                  name="category"
                  value={values.category}
                  onChange={(e) => {
                    setFieldValue("category", e.target.value);
                    handleGetSubCategories(e.target.value);
                  }}
                  onBlur={handleBlur}
                >
                  <MenuItem sx={MenuItemStyle} value={""}>
                    اختر تصنيف
                  </MenuItem>
                  {render_categories()}
                </Select>
                {errors.category && touched.category && (
                  <FormHelperText>{errors.category}</FormHelperText>
                )}
              </FormControl>

              <FormControl
                size="small"
                fullWidth
                sx={{ "& fieldset": { borderRadius: 2 } }}
                error={!!(errors.brand && touched.brand)}
              >
                <Select displayEmpty {...getFieldProps("brand")}>
                  <MenuItem sx={MenuItemStyle} value={""}>
                    اختر ماركة
                  </MenuItem>
                  {render_brands()}
                </Select>
                {errors.brand && touched.brand && (
                  <FormHelperText>{errors.brand}</FormHelperText>
                )}
              </FormControl>

              <>
                <MultiSelect
                  className="multi-select"
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={(subCategories || []).map((ele) => {
                    return { value: ele._id, label: ele.name };
                  })}
                  placeholder="اختار تصنيف فرعي"
                  required
                  blurInputOnSelect
                  onChange={(selectedOptions) => {
                    setFieldValue("subcategory", selectedOptions);
                  }}
                />
                {errors.subcategory && touched.subcategory && (
                  <FormHelperText className="Mui-error">
                    {errors.subcategory.toString()}
                  </FormHelperText>
                )}
              </>

              <Box alignSelf={"flex-start"}>
                <Typography>الوان المنتج</Typography>

                <Box display={"flex"} alignItems={"center"} gap={1} my={2}>
                  {(values.availableColors || []).map((value, index) => {
                    return (
                      <ColorItem
                        key={index}
                        color={value}
                        onClick={() => {
                          setFieldValue(
                            "availableColors",
                            (values.availableColors || []).filter(
                              (ele) => ele !== value
                            )
                          );
                        }}
                      />
                    );
                  })}

                  <Box
                    width={30}
                    height={30}
                    borderRadius={"50%"}
                    border={1}
                    borderColor={"#ddd"}
                    fontSize={30}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"flex-end"}
                    sx={{ cursor: "pointer" }}
                    onClick={ToogleColorPicker}
                  >
                    +
                  </Box>

                  {openColorPicker && (
                    <CompactPicker
                      onChangeComplete={(color) => {
                        setFieldValue("availableColors", [
                          ...values.availableColors,
                          color.hex,
                        ]);
                      }}
                    />
                  )}
                </Box>
              </Box>

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

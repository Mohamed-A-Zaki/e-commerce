import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import useProductSidebar from "../../../Hooks/Product/useProductSidebar";

export default function ProductsSidebar() {
  const {
    brands,
    categories,
    handleBrandChange,
    handleCategoryChange,
    handleGetAllProducts,
    handlePriceToBlur,
    handlePriceFromBlur,
  } = useProductSidebar();

  return (
    <Box width={150} flexShrink={0}>
      <FormGroup sx={{ "& span": { fontSize: 12, padding: 0.5 } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          الفئة
        </Typography>
        <FormControlLabel
          control={<Checkbox onChange={handleGetAllProducts} />}
          sx={{ marginRight: 0 }}
          label="الكل"
        />
        {categories.map((ele) => (
          <FormControlLabel
            key={ele._id}
            sx={{ marginRight: 0 }}
            label={ele.name}
            control={
              <Checkbox onChange={(e) => handleCategoryChange(e, ele)} />
            }
          />
        ))}
      </FormGroup>

      <FormGroup sx={{ "& span": { fontSize: 12, padding: 0.5 } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          الماركة
        </Typography>
        <FormControlLabel
          control={<Checkbox onChange={handleGetAllProducts} />}
          sx={{ marginRight: 0 }}
          label="الكل"
        />
        {brands.map((ele) => (
          <FormControlLabel
            key={ele._id}
            sx={{ marginRight: 0 }}
            label={ele.name}
            control={<Checkbox onChange={(e) => handleBrandChange(e, ele)} />}
          />
        ))}
      </FormGroup>

      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          السعر
        </Typography>

        <Box sx={{ display: "flex", gap: 0.5, my: 1, fontSize: 12 }}>
          من
          <TextField
            type="number"
            size="small"
            sx={{ "& input": { width: 75, height: 10 } }}
            onBlur={handlePriceFromBlur}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 0.5, my: 1, fontSize: 12 }}>
          الي
          <TextField
            type="number"
            size="small"
            sx={{ "& input": { width: 75, height: 10 } }}
            onBlur={handlePriceToBlur}
          />
        </Box>
      </Box>
    </Box>
  );
}

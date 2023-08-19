import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

export default function ProductsSidebar() {
  return (
    <Box width={150} flexShrink={0}>
      <FormGroup sx={{ "& span": { fontSize: 12, padding: 0.5 } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          الفئة
        </Typography>
        <FormControlLabel
          control={<Checkbox />}
          sx={{ marginRight: 0 }}
          label="الكل"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ marginRight: 0 }}
          label="اجهزة منزلية"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ marginRight: 0 }}
          label="اجهزة منزلية"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ marginRight: 0 }}
          label="اجهزة منزلية"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ marginRight: 0 }}
          label="اجهزة منزلية"
        />
      </FormGroup>

      <FormGroup sx={{ "& span": { fontSize: 12, padding: 0.5 } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", my: 2 }}>
          الماركة
        </Typography>
        <FormControlLabel
          control={<Checkbox />}
          sx={{ marginRight: 0 }}
          label="الكل"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ marginRight: 0 }}
          label="ابل"
        />
        <FormControlLabel
          control={<Checkbox />}
          sx={{ marginRight: 0 }}
          label="سامسونج"
        />
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
          />
        </Box>

        <Box sx={{ display: "flex", gap: 0.5, my: 1, fontSize: 12 }}>
          الي
          <TextField
            type="number"
            size="small"
            sx={{ "& input": { width: 75, height: 10 } }}
          />
        </Box>
      </Box>
    </Box>
  );
}

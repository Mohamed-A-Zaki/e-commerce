import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function AddComment() {
  const [value, setValue] = useState<number | null>(2);

  return (
    <Box my={2} px={3}>
      <Typography sx={{ display: "flex", gap: 1, fontWeight: "bold" }}>
        علي محمد
        <Rating
          value={value}
          precision={0.5}
          sx={{ direction: "ltr" }}
          onChange={(_event, newValue) => setValue(newValue)}
        />
      </Typography>

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
      />

      <Button
        variant="contained"
        sx={{
          mt: 2,
          mr: "auto",
          display: "block",
          bgcolor: "#000",
          "&:hover": { bgcolor: "#000" },
        }}
      >
        اضف تعليق
      </Button>
    </Box>
  );
}

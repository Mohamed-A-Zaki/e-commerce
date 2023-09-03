import { CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Typography
      variant="h6"
      textAlign={"center"}
      flex={1}
      display={"flex"}
      gap={1}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <CircularProgress color="secondary" size={20} />
      جاري التحميل
    </Typography>
  );
}

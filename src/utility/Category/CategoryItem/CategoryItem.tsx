import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";

export type CategoryItemProps = {
  image: string;
  color: string;
};
export default function CategoryItem({ image, color }: CategoryItemProps) {
  return (
    <Box textAlign={"center"}>
      <Box bgcolor={color} sx={BoxStyle}>
        <Box component={"img"} src={image} alt="" width={100} height={100} />
      </Box>

      <Typography variant="h6">اجهزة منزلية</Typography>
    </Box>
  );
}

const BoxStyle: SxProps<Theme> = {
  p: 2,
  m: "auto",
  mb: 1,
  width: 150,
  height: 150,
  borderRadius: "50%",
};

import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import { CategoryType } from "../../../types/Category/Category.type";

export default function CategoryItem({ image, name }: CategoryType) {
  const colors = ["#AEBEFB", "#FBCCCC", "#F8F0E0"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Box textAlign={"center"}>
      <Box bgcolor={getRandomColor()} sx={BoxStyle}>
        <Box component={"img"} src={image} alt="" width={100} height={100} />
      </Box>
      <Typography variant="h6">{name}</Typography>
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

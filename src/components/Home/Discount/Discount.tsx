import image from "../../../assets/laptops.png";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Discount() {
  return (
    <Container
      fixed
      sx={{ bgcolor: "#515354", borderRadius: 3, color: "#fff", py: 2 }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Typography variant="h6">
          خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب
        </Typography>

        <Box component={"img"} src={image} alt="discount" height={130} />
      </Stack>
    </Container>
  );
}

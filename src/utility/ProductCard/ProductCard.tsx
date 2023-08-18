import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import img from "../../assets/prod1.png";

import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ProductCard() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" image={img} alt="" />
          <CardContent>
            <FavoriteBorderIcon sx={{ mr: "auto", display: "block" }} />

            <Typography my={1} component="div">
              سود كربون ساعة يد ذكية بيب إس أسود كربون
            </Typography>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography sx={{ display: "flex", gap: 0.5, color: "#FFC107" }}>
                <StarIcon /> 4.5
              </Typography>
              <Typography fontWeight={"bold"} fontSize={20}>
                880 جنيه
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

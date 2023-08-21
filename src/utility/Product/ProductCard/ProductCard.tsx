import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

import img from "../../../assets/item.png";

import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ProductCard() {
  return (
    <Card>
      <Link to="/products/id">
        <CardMedia
          component="img"
          image={img}
          alt=""
          height={200}
          sx={{ objectFit: "fill" }}
        />
      </Link>

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
    </Card>
  );
}

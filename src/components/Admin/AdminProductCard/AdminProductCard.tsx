import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import StarIcon from "@mui/icons-material/Star";
import { ProductType } from "../../../types/Product/Product.type";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function AdminProductCard(props: ProductType) {
  const { _id, imageCover, ratingsQuantity, title, price } = props;

  return (
    <Card>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button>ازالة</Button>
        <Button>تعديل</Button>
      </CardActions>

      <Link to={`/products/${_id}`}>
        <CardMedia
          component="img"
          image={imageCover}
          alt=""
          height={200}
          sx={{ objectFit: "contain", mt: 2 }}
        />
      </Link>

      <CardContent>
        <FavoriteBorderIcon sx={{ mr: "auto", display: "block" }} />

        <Typography my={1} component="div">
          {/* سود كربون ساعة يد ذكية بيب إس أسود كربون */}
          {title}
        </Typography>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography sx={{ display: "flex", gap: 0.5, color: "#FFC107" }}>
            <StarIcon /> {ratingsQuantity}
          </Typography>
          <Typography fontWeight={"bold"} fontSize={20}>
            {price} جنيه
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

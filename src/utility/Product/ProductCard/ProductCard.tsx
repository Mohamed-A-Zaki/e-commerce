import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  SxProps,
  Typography,
  Theme,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { ProductType } from "../../../types/Product/Product.type";
import useProductCard from "../../../Hooks/Product/useProductCard";

export default function ProductCard(props: ProductType) {
  const { _id, imageCover, title, price, ratingsAverage } = props;

  const { handleAddToWishList, handleRemoveFromWishList, wish_list_ids } =
    useProductCard(_id);

  return (
    <Card>
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
        {wish_list_ids.includes(_id) ? (
          <FavoriteIcon
            sx={{ ...iconStyle, color: "error.main" }}
            onClick={handleRemoveFromWishList}
          />
        ) : (
          <FavoriteBorderIcon sx={iconStyle} onClick={handleAddToWishList} />
        )}

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
            <StarIcon /> {ratingsAverage || 0}
          </Typography>
          <Typography fontWeight={"bold"} fontSize={20}>
            {price} جنيه
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

const iconStyle: SxProps<Theme> = {
  mr: "auto",
  display: "block",
  cursor: "pointer",
};

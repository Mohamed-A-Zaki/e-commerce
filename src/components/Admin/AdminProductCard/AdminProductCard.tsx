import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../../store/hooks";
import { ProductType } from "../../../types/Product/Product.type";
import {
  openModal,
  setProductId,
} from "../../../store/products/DeleteProductModalSlice/DeleteProductModalSlice";

import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AdminProductCard(props: ProductType) {
  const { _id, imageCover, title, price, ratingsAverage } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Card>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          color="secondary"
          aria-label="edit"
          size="small"
          onClick={() => {
            navigate(`/admin/editproduct/${_id}`);
          }}
          sx={{ flexDirection: "row-reverse" }}
        >
          تعديل
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          aria-label="delete"
          size="small"
          onClick={() => {
            dispatch(openModal());
            dispatch(setProductId(_id));
          }}
          sx={{ flexDirection: "row-reverse" }}
        >
          حذف
        </Button>
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
        <Typography my={1} component="div">
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

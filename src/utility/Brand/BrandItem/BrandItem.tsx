import { Card, CardMedia } from "@mui/material";
import { BrandType } from "../../../types/Brand/Brand.type";
import { useNavigate } from "react-router-dom";

export default function BrandItem({ image, _id }: BrandType) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/brand/${_id}`);
  };

  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 2, cursor: "pointer" }}
      onClick={handleClick}
    >
      <CardMedia component="img" image={image} alt="" height={150} />
    </Card>
  );
}

import { Grid } from "@mui/material";
import BrandItem from "../BrandItem/BrandItem";

import brand1 from "../../../assets/brand1.png";
import brand2 from "../../../assets/brand2.png";
import brand3 from "../../../assets/brand3.png";

const data = [
  {
    id: 1,
    image: brand1,
  },
  {
    id: 2,
    image: brand2,
  },
  {
    id: 3,
    image: brand3,
  },
  {
    id: 4,
    image: brand1,
  },
  {
    id: 5,
    image: brand2,
  },
  {
    id: 6,
    image: brand3,
  },
];

export default function BrandList() {
  return (
    <Grid container spacing={1}>
      {data.map((brand) => {
        return <BrandItem key={brand.id} {...brand} />;
      })}
    </Grid>
  );
}

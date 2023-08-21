import { Grid } from "@mui/material";
import CategoryItem from "../CategoryItem/CategoryItem";

import cat1 from "../../../assets/cat2.png";
import cat2 from "../../../assets/clothe.png";
import cat3 from "../../../assets/labtop.png";
import cat4 from "../../../assets/sale.png";
import cat5 from "../../../assets/pic.png";

const data = [
  {
    id: 1,
    image: cat1,
    color: "#AEBEFB",
  },
  {
    id: 2,
    image: cat2,
    color: "#FBCCCC",
  },
  {
    id: 3,
    image: cat3,
    color: "#F8F0E0",
  },
  {
    id: 4,
    image: cat4,
    color: "#AEBEFB",
  },
  {
    id: 5,
    image: cat1,
    color: "#FBCCCC",
  },
  {
    id: 6,
    image: cat5,
    color: "#F8F0E0",
  },
];

export default function CategoryList() {
  return (
    <Grid container spacing={1}>
      {data.map((category) => {
        return (
          <Grid item key={category.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <CategoryItem {...category} />
          </Grid>
        );
      })}
    </Grid>
  );
}

import Carousel from "react-multi-carousel";
import { Box, Typography } from "@mui/material";

import slider1 from "../../../assets/slider1.png";
import slider2 from "../../../assets/slider4.png";
import slider3 from "../../../assets/prod3.png";
import slider4 from "../../../assets/prod4.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const data = [
  {
    id: 1,
    image: slider1,
    bgcolor: "#A4E1EB",
  },
  {
    id: 2,
    image: slider2,
    bgcolor: "#FFE7F2",
  },
  {
    id: 3,
    image: slider3,
    bgcolor: "#F2E2B7",
  },
  {
    id: 4,
    image: slider4,
    bgcolor: "#FFE7F2",
  },
];

export default function Slider() {
  return (
    <Carousel
      responsive={responsive}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      dotListClass="custom-dot-list"
    >
      {data.map(({ id, image, bgcolor }) => {
        return (
          // start slide
          <Box
            key={id}
            bgcolor={bgcolor}
            height={350}
            display={"flex"}
            gap={3}
            flexDirection={"row-reverse"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box component={"img"} src={image} width={300} height={350} />

            <Box textAlign={"center"} color="#915970">
              <Typography variant="h5" mb={3}>
                هناك خصم كبير
              </Typography>

              <Typography variant="h4" fontWeight={"bold"}>
                خصم يصل الي 50 % عند شرائك
              </Typography>
            </Box>
          </Box>
          // end slide
        );
      })}
    </Carousel>
  );
}

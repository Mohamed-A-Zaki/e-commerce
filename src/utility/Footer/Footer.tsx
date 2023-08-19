import { Box, Container, Stack, Typography } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box py={3} bgcolor={"#fff"} color={"text.secondary"}>
      <Container fixed>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={1}
        >
          <Box display={"flex"} gap={2}>
            <Typography sx={{ cursor: "pointer" }}>الشروط والاحكام</Typography>
            <Typography sx={{ cursor: "pointer" }}>سيايه الخصوصيه</Typography>
            <Typography sx={{ cursor: "pointer" }}>اتصل بنا</Typography>
          </Box>

          <Box display={"flex"} gap={2}>
            <Typography display={"flex"} gap={0.5} sx={{ cursor: "pointer" }}>
              <PhoneIcon />
              0122455346356
            </Typography>

            <Typography display={"flex"} gap={1}>
              <FacebookIcon sx={{ cursor: "pointer" }} />
              <InstagramIcon sx={{ cursor: "pointer" }} />
              <TwitterIcon sx={{ cursor: "pointer" }} />
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

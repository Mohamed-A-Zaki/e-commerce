import image from "../../../assets/mobile.png";
import { Stack, Box, Typography, TextField } from "@mui/material";

export default function UserOrderItem() {
  return (
    <Stack direction={"row"} bgcolor={"#fff"} p={1} mb={1} borderRadius={3}>
      <Box component={"img"} src={image} alt="" sx={{ width: 120 }} />

      <Box flexGrow={1} mr={2}>
        <Stack mt={2}>
          <Typography fontSize={14}>
            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
          </Typography>

          <Stack direction={"row"} gap={1} my={2}>
            <Typography sx={{ fontSize: 14 }}>احمر</Typography>
            <Typography sx={{ fontSize: 14 }} color={"#FFC107"}>
              4.5
            </Typography>
            <Typography sx={{ fontSize: 14 }}>(160 تقييم)</Typography>
          </Stack>

          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Typography fontSize={14} color={"text.secondary"}>
              الكمية
            </Typography>
            <TextField
              type="number"
              size="small"
              sx={{ "& input": { width: 50, height: 10 } }}
            />
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}

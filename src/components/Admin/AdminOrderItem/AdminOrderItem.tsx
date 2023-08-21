import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import { Stack, Box, Typography, TextField } from "@mui/material";

import image from "../../../assets/mobile.png";
import ColorItem from "../../../utility/ColorItem/ColorItem";

export default function AdminOrderItem() {
  const navigate = useNavigate();

  return (
    <Stack
      direction={"row"}
      bgcolor={"#fff"}
      p={1}
      mb={1}
      borderRadius={3}
      sx={{ cursor: "pointer" }}
      onClick={() => navigate("/orders/23")}
    >
      <Box component={"img"} src={image} alt="" sx={{ width: 120 }} />

      <Box flexGrow={1} mr={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          color={"text.secondary"}
        >
          <Typography fontWeight={"bold"}>طلب رقم #123</Typography>
          <Typography sx={{ display: "flex", cursor: "pointer" }}>
            <DeleteIcon />
            ازالة
          </Typography>
        </Stack>

        <Stack mt={2}>
          <Stack direction={"row"} gap={1} my={0.5} alignItems={"center"}>
            <Typography fontSize={14}>
              آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
            </Typography>
            <Typography color={"#FFC107"}>4.5</Typography>
          </Stack>

          <Stack direction={"row"} gap={1} my={0.5} alignItems={"center"}>
            <Typography fontSize={14} color={"text.secondary"}>
              الماركة:
            </Typography>
            <Typography fontWeight={"bold"} fontSize={20}>
              ابل
            </Typography>
            <ColorItem color="#f00" />
          </Stack>

          <Stack
            direction={"row"}
            gap={1}
            my={0.5}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
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
            <Typography fontSize={20} fontWeight={"bold"}>
              300 جنية
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

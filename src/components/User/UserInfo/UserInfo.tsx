import { Box, Card, CardContent, Typography } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

export default function UserInfo() {
  return (
    <>
      <SectionTitle>الصفحه الشخصية</SectionTitle>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            الاسم :
            <Typography color={"text.secondary"}>احمد عبداللة</Typography>
          </Box>

          <Box display={"flex"} alignItems={"center"} gap={1}>
            رقم الهاتف :
            <Typography color={"text.secondary"}>0021313432423</Typography>
          </Box>

          <Box display={"flex"} alignItems={"center"} gap={1}>
            الايميل :
            <Typography color={"text.secondary"}>ahmed@gmail.com</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

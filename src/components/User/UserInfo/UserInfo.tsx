import { useAppSelector } from "../../../store/hooks";
import { Box, Card, CardContent, Typography } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";

export default function UserInfo() {
  const { user } = useAppSelector((state) => state.Auth);

  return (
    <Box width={700} maxWidth={"100%"}>
      <SectionTitle>الصفحه الشخصية</SectionTitle>

      <Card sx={{ borderRadius: 3 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            الاسم :<Typography color={"text.secondary"}>{user.name}</Typography>
          </Box>

          <Box display={"flex"} alignItems={"center"} gap={1}>
            رقم الهاتف :
            <Typography color={"text.secondary"}>{user.phone}</Typography>
          </Box>

          <Box display={"flex"} alignItems={"center"} gap={1}>
            الايميل :
            <Typography color={"text.secondary"}>{user.email}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

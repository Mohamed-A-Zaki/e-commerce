import { useAppSelector } from "../../../store/hooks";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import SectionTitle from "../../../utility/SectionTitle/SectionTitle";
import { useNavigate } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";

export default function UserInfo() {
  const { user } = useAppSelector((state) => state.Auth);
  const navigate = useNavigate();

  return (
    <Box width={700} maxWidth={"100%"}>
      <SectionTitle>الصفحه الشخصية</SectionTitle>

      <Card sx={{ borderRadius: 3, position: "relative" }}>
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

          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            color="secondary"
            aria-label="edit"
            size="small"
            onClick={() => navigate("/user/edit-profile")}
            sx={{
              flexDirection: "row-reverse",
              position: "absolute",
              top: 15,
              left: 15,
            }}
          >
            تعديل
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

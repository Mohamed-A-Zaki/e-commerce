import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddressCard() {
  const navigate = useNavigate();

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography sx={{ flexGrow: 1 }}>المنزل</Typography>
          <Button onClick={() => navigate("/user/edit-address")}>تعديل</Button>
          <Button>حذف</Button>
        </Box>
        <Typography>القاهرة مدينه نصر شارع التسعين عماره ١٤</Typography>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          رقم الهاتف :
          <Typography color={"text.secondary"}>0021313432423</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

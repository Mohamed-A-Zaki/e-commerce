import { Box, Button, Card, CardContent, Typography } from "@mui/material";

export default function AddressCard() {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography sx={{ flexGrow: 1 }}>المنزل</Typography>
          <Button>تعديل</Button>
          <Button>حذف</Button>
        </Box>
        <Typography>القاهرة مدينه نصر شارع التسعين عماره ١٤</Typography>

        <Typography sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          رقم الهاتف :
          <Typography color={"text.secondary"}>0021313432423</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

import { CouponType } from "../../../types/Coupon/Coupon.type";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useAdminCoupon from "../../../Hooks/Coupon/useAdminCoupon";

export default function AdminCoupon(props: CouponType) {
  const { _id, name, expire, discount } = props;
  const { handleDeletButton, handleEditButton } = useAdminCoupon(_id);

  return (
    <Card sx={{ borderRadius: 3, position: "relative" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          الكود :<Typography color={"text.secondary"}>{name}</Typography>
        </Box>

        <Box display={"flex"} alignItems={"center"} gap={1}>
          تاريخ الانتهاء :
          <Typography color={"text.secondary"}>
            {expire.slice(0, 10)}
          </Typography>
        </Box>

        <Box display={"flex"} alignItems={"center"} gap={1}>
          نسبة الخصم :
          <Typography color={"text.secondary"}>{discount}</Typography>
        </Box>

        <Box position={"absolute"} top={15} left={15} display={"flex"} gap={1}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            color="secondary"
            aria-label="edit"
            size="small"
            onClick={handleEditButton}
            sx={{ flexDirection: "row-reverse" }}
          >
            تعديل
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            color="error"
            aria-label="delete"
            size="small"
            onClick={handleDeletButton}
            sx={{ flexDirection: "row-reverse" }}
          >
            حذف
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
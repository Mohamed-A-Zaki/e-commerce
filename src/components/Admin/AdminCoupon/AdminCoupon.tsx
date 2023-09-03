import { Box, Card, CardContent, Typography } from "@mui/material";

import { CouponType } from "../../../types/Coupon/Coupon.type";
import useAdminCoupon from "../../../Hooks/Coupon/useAdminCoupon";

import EditButton from "../../../utility/EditButton/EditButton";
import DeleteButton from "../../../utility/DeleteButton/DeleteButton";
import DeleteEditBtnscontainer from "../../../utility/DeleteEditBtnscontainer/DeleteEditBtnscontainer";

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

        <DeleteEditBtnscontainer>
          <EditButton onClick={handleEditButton} />
          <DeleteButton onClick={handleDeletButton} />
        </DeleteEditBtnscontainer>
      </CardContent>
    </Card>
  );
}

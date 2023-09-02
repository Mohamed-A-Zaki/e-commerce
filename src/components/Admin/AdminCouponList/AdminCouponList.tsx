import { Stack } from "@mui/material";
import { CouponType } from "../../../types/Coupon/Coupon.type";
import AdminCoupon from "../AdminCoupon/AdminCoupon";

export type AdminCouponListProps = {
  coupons: CouponType[];
};
export default function AdminCouponList({ coupons }: AdminCouponListProps) {
  return (
    <Stack spacing={1.5} width={700} maxWidth={"100%"} my={3}>
      {coupons.map((coupon) => {
        return <AdminCoupon key={coupon._id} {...coupon} />;
      })}
    </Stack>
  );
}

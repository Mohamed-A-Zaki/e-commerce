import { Stack } from "@mui/material";
import { CouponType } from "../../../types/Coupon/Coupon.type";
import AdminCoupon from "../AdminCoupon/AdminCoupon";
import { useAppSelector } from "../../../store/hooks";
import Loading from "../../../utility/Loading/Loading";
import ErrorMessage from "../../../utility/ErrorMessage/ErrorMessage";
import EmptyListMessage from "../../../utility/EmptyListMessage/EmptyListMessage";

export type AdminCouponListProps = {
  coupons: CouponType[];
};
export default function AdminCouponList({ coupons }: AdminCouponListProps) {
  const { loading, error } = useAppSelector((state) => state.Coupon);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage>يوجد خطا ما...</ErrorMessage>;
  }

  if (coupons.length === 0) {
    return <EmptyListMessage>لا يوجد أي كوبونات حاليا...</EmptyListMessage>;
  }

  return (
    <Stack spacing={1.5} width={700} maxWidth={"100%"} my={3}>
      {coupons.map((coupon) => {
        return <AdminCoupon key={coupon._id} {...coupon} />;
      })}
    </Stack>
  );
}

import AdminAddCouponForm from "../../../components/Admin/AdminAddCouponForm/AdminAddCouponForm";
import AdminCouponList from "../../../components/Admin/AdminCouponList/AdminCouponList";
import { useAppSelector } from "../../../store/hooks";

export default function AdminAddCoupon() {
  const { coupons } = useAppSelector((state) => state.Coupon);

  return (
    <>
      <AdminAddCouponForm />
      <AdminCouponList coupons={coupons} />
    </>
  );
}

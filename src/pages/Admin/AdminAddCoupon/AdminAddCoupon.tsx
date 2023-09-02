import { useAppSelector } from "../../../store/hooks";
import AdminCouponList from "../../../components/Admin/AdminCouponList/AdminCouponList";
import DeleteCouponModal from "../../../components/Modals/DeleteCouponModal/DeleteCouponModal";
import AdminAddCouponForm from "../../../components/Admin/AdminAddCouponForm/AdminAddCouponForm";

export default function AdminAddCoupon() {
  const { coupons } = useAppSelector((state) => state.Coupon);

  return (
    <>
      <AdminAddCouponForm />
      <AdminCouponList coupons={coupons} />
      <DeleteCouponModal />
    </>
  );
}

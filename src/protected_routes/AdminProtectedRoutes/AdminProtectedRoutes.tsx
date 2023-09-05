import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export type AdminProtectedRoutesProps = {
  children: React.ReactNode;
};
export default function AdminProtectedRoutes({
  children,
}: AdminProtectedRoutesProps) {
  const { user } = useAppSelector((state) => state.Auth);
  return user.role === "admin" ? children : <Navigate to="/" replace />;
}

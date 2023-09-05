import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export type UserProtectedRoutesProps = {
  children: React.ReactNode;
};
export default function UserProtectedRoutes({
  children,
}: UserProtectedRoutesProps) {
  const { user } = useAppSelector((state) => state.Auth);
  return user.role === "user" ? children : <Navigate to="/" replace />;
}

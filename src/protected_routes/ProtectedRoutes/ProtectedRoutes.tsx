import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

export type ProtectedRoutesProps = {
  children: React.ReactNode;
};
export default function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const { user } = useAppSelector((state) => state.Auth);
  return user.role ? children : <Navigate to="/login" replace />;
}

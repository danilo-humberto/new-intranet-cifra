import { getStorageItem } from "@/utils/Storage";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = getStorageItem("user");
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./pages/Layout";
import Portais from "./pages/Portais";
import EletronicDiary from "./pages/EletronicDiary";
import ManagementPortals from "./pages/admin/ManagementPortals";
import ManagementUsers from "./pages/admin/ManagementUsers";
import SessionExpiredDialog from "./components/dialogs/SessionExpiredDialog";
import PortalDetails from "./pages/PortalDetails";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivateRoute";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.removeItem("@auth/user");
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="portals" element={<Portais />} />
            <Route path="portals/:id" element={<PortalDetails />} />
            <Route path="eletronicDiary" element={<EletronicDiary />} />
            <Route path="admin/portals" element={<ManagementPortals />} />
            <Route path="admin/users" element={<ManagementUsers />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <SessionExpiredDialog />
    </>
  );
}

export default App;

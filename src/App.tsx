import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import Portais from "./pages/Portais";
import EletronicDiary from "./pages/EletronicDiary";
import ManagementPortals from "./pages/admin/ManagementPortals";
import ManagementUsers from "./pages/admin/ManagementUsers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <Main>
              <Routes>
                <Route path="portals" element={<Portais />} />
                <Route path="eletronicDiary" element={<EletronicDiary />} />
                <Route path="admin/portals" element={<ManagementPortals />} />
                <Route path="admin/users" element={<ManagementUsers />} />
              </Routes>
            </Main>
          }
        />
      </Routes>
    </>
  );
}

export default App;

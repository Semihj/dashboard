import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Verify from "./pages/CheckSecretKey/Verify";
import ProtectedPages from "./components/security/ProtectedPages";
import VerifiedUser from "./components/security/VerifiedUser";
import Settings from "./pages/Settings/Settings";
import Payments from "./pages/Payments/Payments";
import Users from "./pages/Users/Users";
import Targets from "./pages/Targets/Targets";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/verify" element={<Verify />} />
        <Route element={<ProtectedPages />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<VerifiedUser />}>
          <Route path="/" element={<Home />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/targets" element={<Targets />} />
          <Route path="/settings" element={<Settings />} />

        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

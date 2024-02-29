import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { signOutSuccess } from "../../redux/admin/adminSlice";
import { useEffect, useState } from "react";
import MobileSideBar from "../../components/MobileSideBar/MobileSideBar";
import { IoMenu } from "react-icons/io5";
import Sidebar from "../Sidebar/Sidebar";
export default function VerifiedUser() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [cookie, removeCookie] = useCookies(["user"]);
  const [sidebar, setSideBar] = useState(false);
  const location = useLocation()
  useEffect(() => {
    const close = document.querySelector(".menu-close");
    close?.addEventListener("click", () => setSideBar(false));
  }, [sidebar]);
  useEffect(() => {
    setSideBar(false)
  }, [location])
  
  useEffect(() => {
    const handleSignOut = () => {
      if (!cookie.user) {
        return dispatch(signOutSuccess());
      }
    };
    handleSignOut();
  }, [cookie]);

  return currentUser ? (
    <div className="wrapper" >
    
      <Sidebar/>
      <button className="menu"  >
        <IoMenu className="menu-icon" onClick={() => setSideBar(true)}/>
        
      </button>
      {sidebar ? <MobileSideBar /> : 
       <Outlet />}
    </div>
  ) : (
    <Navigate to="/login" />
  );
}

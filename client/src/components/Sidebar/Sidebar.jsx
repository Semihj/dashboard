import { useEffect } from 'react'
import "./Sidebar.css"
import { Link, useLocation, useParams  } from 'react-router-dom'
import { FaHome,FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GoSignOut } from "react-icons/go";
import { useDispatch } from 'react-redux'
import { signOutSuccess } from '../../redux/admin/adminSlice';
import { useCookies } from 'react-cookie';
import { MdPayment } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
export default function Sidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const links = document.querySelectorAll(".link")
  const [cookie,removeCookie] = useCookies(["user"])
  useEffect(() => {

   handleAddClass()
  }, [location.pathname])

  useEffect(() => { 
   console.log(location.pathname)
   handleAddClass()
  }, [])

  
  const handleAddClass = () => {
    
    links.forEach((link) => {
      
      if(link.id === location.pathname) {
        link.classList.add("active");
      
      } else {
        link.classList.remove("active");
      }
    })
  }

  const handleSignOut = async () => {
    
    removeCookie("user", { path: '/', domain: 'localhost' })
    dispatch(signOutSuccess())
  }
  return (
    <div className='sidebar' >
      <h1>Chat-App</h1>
      <ul className='links-list' >
        <Link className='link ' id="/"  to={"/"}>
          <li>Home <span  ><FaHome className='icon' /></span> </li>
        </Link>
        <Link className='link' id="/payments"  to={"/payments"}>
          <li>Payments <span  ><MdPayment className='icon' /></span> </li>
        </Link>
        <Link className='link'  id="/users" to={"/users"}>
          <li>Users <span  ><FaUsers className='icon' /></span> </li>
        </Link>
        <Link className='link' id="/targets"  to={"/targets"}>
          <li>Targets <span  ><SiFuturelearn className='icon' /></span> </li>
        </Link>
        
        <div className="">
          <Link to={"/settings"} className='settings-link' ><IoMdSettings/></Link>
          <GoSignOut onClick={() => handleSignOut()} />
        </div>
      </ul>
    </div>
  )
}

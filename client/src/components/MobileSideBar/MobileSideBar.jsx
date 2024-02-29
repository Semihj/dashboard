import "./MobileSideBar.css"
import { Link } from 'react-router-dom'
import { FaHome, FaUsers } from 'react-icons/fa'
import { SiFuturelearn } from 'react-icons/si'
import { GoSignOut } from 'react-icons/go'
import { IoMdSettings } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { signOutSuccess } from '../../redux/admin/adminSlice'
import { MdPayment } from 'react-icons/md'
export default function MobileSideBar() {

    const dispatch = useDispatch()
  return (
    <div className='mobile-sidebar' >

            <h1>Chat App</h1>
            <button className='menu-close' >X</button>
           <ul className='links-list' >
        <Link className='link' id="/"  to={"/"}>
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
          <GoSignOut onClick={() => {
            dispatch(signOutSuccess())
          } }  />
        </div>
      </ul>
    </div>
  )
}

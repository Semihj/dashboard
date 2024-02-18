import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { signOutSuccess } from '../../redux/admin/adminSlice'
import { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'

export default function VerifiedUser() {
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [cookie,removeCookie] = useCookies(["user"])
   
    useEffect(() => {
     if(!cookie.user){
      return  dispatch(signOutSuccess())
     } if(cookie.user) {
        removeCookie(cookie.secret_key, { path: '/', domain: 'localhost' })
     }
    

    }, [cookie])
 
    return currentUser ? <Outlet/> : <Navigate to="/login"/>
}

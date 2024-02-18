import { useCookies } from 'react-cookie'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedPages() {
    const [cookies] = useCookies(["secret_key"])
    console.log(cookies)
   
    return cookies.secret_key ? <Outlet/> : <Navigate to="/verify"/>
}

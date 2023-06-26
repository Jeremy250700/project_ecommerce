import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes(){
    const adminLogin = useSelector(state=>state.auth.user.role === 'admin')

    if (adminLogin) {
        return <Navigate to ="/admin"/>
    }
    return <Navigate to='/login'/>
}
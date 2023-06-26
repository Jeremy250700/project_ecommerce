import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestRoutes(){
    const login = useSelector(state=> state.auth.token !== '')

    if (login) {
        return <Navigate to ="/"/>
    }

    return <Outlet/>
}
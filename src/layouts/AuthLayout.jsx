import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

const AuthLayout = ({ children }) => {
    const location = useLocation();
    const {admis} = useAuth();

    if (!admis) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    return children;
}
 
export default AuthLayout;
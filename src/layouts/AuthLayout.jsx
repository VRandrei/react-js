import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AuthLayout = ({ children }) => {
    const location = useLocation();
    const {admis} = useContext(AuthContext);

    if (!admis) {
        return <Navigate to='/login' state={{ from: location }} />
    }

    return children;
}
 
export default AuthLayout;
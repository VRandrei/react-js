import { useContext } from "react";
import { AuthContext } from "../layouts/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext)
}
 
export default useAuth;
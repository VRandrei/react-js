import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [admis, setAdmis] = useState(null);

    const signin = (newAdmis, callBack) => {
        setAdmis(newAdmis);
        callBack();
    }
    const signout = (callBack) => {
        setAdmis(null);
        callBack()
    }

    const value = {admis, signin, signout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
 
export default AuthProvider;
import { Outlet } from "react-router-dom";
import '../App.css';

const AuthLayoutPage = () => {
    return (
        <>
            <main>
                <Outlet/>
            </main>
        </>
    );
}
 
export default AuthLayoutPage;
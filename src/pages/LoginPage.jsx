import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
import './style.css'

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { signin } = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const user = {
            userName: form.username.value,
            userPAssword: form.password.value
        }

        signin(user, () => navigate(fromPage, {replace: true}))

    }

    return (
        <div className="login-form">
            <div>
                <h1>Login Page</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name="username"/>
                <input type="password" placeholder="password" name="password"/>
                <button>Login</button>
            </form>
        </div>
    );
}
 
export default LoginPage;
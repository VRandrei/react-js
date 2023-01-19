import { Link, Outlet } from "react-router-dom";
import '../App.css';

const DefaultLayout = () => {
    return ( 
        <>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/store'>Store</Link>
                <Link to='/about'>About</Link>
            </header>

            <main>
                <Outlet />
            </main>
            
            <footer>
                <p>Footer here!</p>
            </footer>
        </>
    );
}

export default DefaultLayout;
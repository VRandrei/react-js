import { useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import './style.css';

const AboutPage = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (  
        <div className="about-page">
            <div>This is About page!</div>
            <button className='log-out-button' onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</button>
        </div>
    );
}
 
export default AboutPage;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmDialog from '../components/Dialog';
import useAuth from '../hook/useAuth';
import './style.css';


const AboutPage = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAccept = () => {
        signout(() => navigate('/', {replace: true}))
    }

    return (  
        <div className="about-page">
            <div>This is About page!</div>
            <button className='log-out-button' onClick={handleClickOpen}>Log Out</button>
            <ConfirmDialog open={open} handleClose={handleClose} handleAccept={handleAccept} />
        </div>
    );
}
 
export default AboutPage;
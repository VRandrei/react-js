import { useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import './style.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AboutPage = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (  
        <div className="about-page">
            <div>This is About page!</div>
            <button className='log-out-button' onClick={handleClickOpen}>Log Out</button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                {"Do you really want to log out of your account?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    If you log out of your account, you will have to log in again next time!
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={() => signout(() => navigate('/', {replace: true}))} autoFocus>
                    Yes
                </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}
 
export default AboutPage;
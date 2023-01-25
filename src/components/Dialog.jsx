import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ConfirmDialog = ({open, handleClose, handleAccept}) => {
    return (
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
            <Button onClick={handleAccept} autoFocus>
                Yes
            </Button>
            </DialogActions>
        </Dialog>
    );
}
 
export default ConfirmDialog;


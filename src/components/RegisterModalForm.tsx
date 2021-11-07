import * as React from 'react';
import {FC} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions } from '@mui/material';
import {IconButton} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";


interface FormDialogProps {
    open: boolean,
    closeModal: () => void
}


const FormDialogRegister: FC<FormDialogProps> = ({open, closeModal}) => {

    return (
        <div>
            <Dialog open={open} onClose={closeModal}
                    PaperProps={{
                        style: { borderRadius: '16px' }
                    }}>
                <DialogTitle sx={{margin: '0 auto', padding: '8px 0 15px 0'}}>
                    <TwitterIcon color="primary" sx={{fontSize: '36px'}}/>
                    <IconButton
                        aria-label="close"
                        onClick={closeModal}
                        sx={{
                            position: 'absolute',
                            left: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{
                        fontWeight: 700,
                        fontSize: '23px',
                        color: '#000',
                        marginBottom: '30px'
                    }}>
                        Создайте учетную запись
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Логин"
                        type="text"
                        fullWidth
                        variant="outlined"
                        sx={{marginBottom: '25px'}}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Адрес электронной почты"
                        type="email"
                        fullWidth
                        variant="outlined"
                        sx={{marginBottom: '25px'}}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Пароль"
                        type="password"
                        fullWidth
                        variant="outlined"
                        sx={{marginBottom: '150px'}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} fullWidth
                            sx={{color: '#fff', backgroundColor: '#000',
                                borderRadius: '20px',
                                width: '530px',
                                height: '44px',
                                margin: '0 auto 30px auto',
                                "&:hover": {
                                    backgroundColor: 'rgb(0, 0, 0, 0.8)'
                                }}}
                    >
                        Зарегистрироваться
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialogRegister

import * as React from 'react';
import {FC} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {DialogActions, IconButton} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useDispatch} from "react-redux";
import {fetchAuthUser} from "../store/ducks/auth/contracts/actionCreators";
import Notification, {
    NotificationPositionHorizontal,
    NotificationPositionVertical,
    NotificationStatus
} from "./Notification";
import {useTypedSelector} from "../hooks/useTypedSelector";


interface FormDialogProps {
    open: boolean,
    closeModal: () => void
}

export interface LoginInput {
    username: string,
    password: string
}

const LoginFormSchema = yup.object({
    username: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required(),
}).required();


const FormDialog: FC<FormDialogProps> = ({open, closeModal}) => {

    const dispatch = useDispatch()
    const {loadingStatus} = useTypedSelector(state => state.authUser)

    const {control, handleSubmit, formState: {errors}} = useForm<LoginInput>({
        resolver: yupResolver(LoginFormSchema)
    });
    const onSubmit: SubmitHandler<LoginInput> = (data: LoginInput) => {
        try {
            dispatch(fetchAuthUser(data))
        } catch (e) {
            console.log(e)
        }
    }

    if (loadingStatus === 'LOADED') {
        closeModal()
    }

    return (
        <>
            <div>
                <Dialog open={open} onClose={closeModal}
                        PaperProps={{
                            style: {borderRadius: '16px'}
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
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogContent>
                            <DialogContentText style={{
                                fontWeight: 700,
                                fontSize: '23px',
                                color: '#000',
                                marginBottom: '30px'
                            }}>
                                Чтобы войти, введите адрес электронной почты и пароль
                            </DialogContentText>
                            <Controller
                                name="username"
                                control={control}
                                defaultValue=""
                                render={({field}) => <TextField {...field} autoFocus
                                                                margin="dense"
                                                                label="Адрес электронной почты"
                                                                type="email"
                                                                fullWidth
                                                                error={!!errors.username}
                                                                helperText={errors.username?.message}
                                                                variant="outlined"
                                                                sx={{marginBottom: '25px'}}/>}


                            />
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({field}) => <TextField {...field}
                                                                autoFocus
                                                                margin="dense"
                                                                label="Пароль"
                                                                type="password"
                                                                fullWidth
                                                                error={!!errors.password}
                                                                helperText={errors.password?.message}
                                                                variant="outlined"
                                                                sx={{marginBottom: '150px'}}/>}


                            />
                        </DialogContent>
                        <DialogActions>
                            <Button
                                disabled={loadingStatus === 'LOADING'}
                                type="submit"
                                fullWidth
                                sx={{
                                    color: '#fff', backgroundColor: '#000',
                                    borderRadius: '20px',
                                    width: '530px',
                                    height: '44px',
                                    margin: '0 auto 30px auto',
                                    "&:hover": {
                                        backgroundColor: 'rgb(0, 0, 0, 0.8)'
                                    }
                                }}
                            >
                                Войти
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
            {
                loadingStatus === 'ERROR'
                    ? <Notification
                        notificationText={'Неверный логин или пароль!'}
                        status={NotificationStatus.error}
                        vertical={NotificationPositionVertical.bottom}
                        horizontal={NotificationPositionHorizontal.center}
                    />
                    : null
            }
        </>
    );
}

export default FormDialog

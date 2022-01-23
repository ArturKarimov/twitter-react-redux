import * as React from 'react';
import {FC} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {DialogActions} from '@mui/material';
import {IconButton} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import * as yup from "yup";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {fetchRegisterUser} from "../store/ducks/auth/contracts/actionCreators";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";


interface FormDialogProps {
    open: boolean,
    closeModal: () => void
}

export interface RegisterInput {
    email: string,
    username: string,
    fullname: string,
    password: string,
    password2: string
}

const RegisterFormSchema = yup.object({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    username: yup.string().required('Введите логин'),
    fullname: yup.string().required('Введите имя и фамилию'),
    password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required(),
    password2: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают')
}).required();


const FormDialogRegister: FC<FormDialogProps> = ({open, closeModal}) => {

    const dispatch = useDispatch()
    const {loadingStatus} = useTypedSelector(state => state.registerUser)

    const {control, handleSubmit, formState: {errors}} = useForm<RegisterInput>({
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit: SubmitHandler<RegisterInput> = (data: RegisterInput) => {
        try {
            dispatch(fetchRegisterUser(data))
        } catch (e) {
            console.log(e)
        }
    }

    if (loadingStatus === 'LOADED') {
        closeModal()
    }

    return (
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
                            Создайте учетную запись
                        </DialogContentText>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField {...field} autoFocus
                                                            margin="dense"
                                                            label="Введите email"
                                                            type="email"
                                                            fullWidth
                                                            error={!!errors.email}
                                                            helperText={errors.email?.message}
                                                            variant="outlined"
                            />}
                        />
                        <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField {...field} autoFocus
                                                            margin="dense"
                                                            label="Введите логин"
                                                            fullWidth
                                                            error={!!errors.username}
                                                            helperText={errors.username?.message}
                                                            variant="outlined"
                            />}
                        />
                        <Controller
                            name="fullname"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField {...field} autoFocus
                                                            margin="dense"
                                                            label="Введите имя и фамилию"
                                                            fullWidth
                                                            error={!!errors.fullname}
                                                            helperText={errors.fullname?.message}
                                                            variant="outlined"
                            />}
                        />
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField {...field}
                                                            autoFocus
                                                            margin="dense"
                                                            label="Введите пароль"
                                                            type="password"
                                                            fullWidth
                                                            error={!!errors.password}
                                                            helperText={errors.password?.message}
                                                            variant="outlined"
                            />}


                        />
                        <Controller
                            name="password2"
                            control={control}
                            defaultValue=""
                            render={({field}) => <TextField {...field}
                                                            autoFocus
                                                            margin="dense"
                                                            label="Подтвердите пароль"
                                                            type="password"
                                                            fullWidth
                                                            error={!!errors.password2}
                                                            helperText={errors.password2?.message}
                                                            variant="outlined"
                            />}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            disabled={loadingStatus === 'LOADING'}
                            fullWidth
                            type="submit"
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
                            Зарегистрироваться
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default FormDialogRegister

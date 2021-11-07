import React from 'react';

import { makeStyles } from '@mui/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import FormDialog from "./LoginModalForm";
import FormDialogRegister from "./RegisterModalForm";


const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueSide: {
        position: 'relative',
        backgroundImage: 'url(https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png)',
        minWidth: '40.8vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    },
    loginSide: {
        display: 'flex',
        flexDirection: 'column',
        padding: '36px'
    },

    loginSideTitle: {
        '& p': {
            fontWeight: 700,
            fontSize: '64px',
            lineHeight: '84px',
        },
        maxWidth: '563px',
        margin: '48px 0 48px 0'
    },
    loginSideText: {
        '& p': {
            fontWeight: 700,
            fontSize: '31px',
            lineHeight: '36px'
        },
        maxWidth: '647px',
        marginBottom: '32px'
    },
    registerButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgb(207, 217, 222)',
        width: '300px',
        borderRadius: '30px',
        cursor: 'pointer',
        transition: 'background-color 0.15s linear',
        '&:hover': {
            backgroundColor: 'rgb(227, 229, 230)'
        },
        '& button': {
            textTransform: 'none',
            color: '#000',
            fontWeight: 650,
            fontSize: '15px',
            lineHeight: '20px',
        },
    },
    registerPrivateText: {
        maxWidth: '380px',
        marginTop: '10px',
        marginBottom: '20px',
        '& p': {
            fontSize: '13px',
            fontWeight: '400',
            color: 'rgb(83, 100, 113)',
            lineHeight: '16px',
        }
    },
    loginButton: {
        display: 'inline',
        '& a': {
            textDecoration: 'none',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            margin: '0 0 0 5px',
            cursor: 'pointer',
        },
    },

    twitterIconBlueSide: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        "& svg": {
            fontSize: '25rem',
        }
    },
    twitterIconLoginSide: {
        color: '#fff',
        "& svg": {
            fontSize: '3rem',
        }
    }
}))

function SignIn() {

    const classes = useStyles()

    const [open, setOpen] = React.useState({login: false, register: false});

    const handleClickOpenLogin = () => {
        setOpen({...open, login: true});
    };

    const handleCloseLogin = () => {
        setOpen({...open, login: false});
    };

    const handleClickOpenRegister = () => {
        setOpen({...open, register: true});
    };

    const handleCloseRegister = () => {
        setOpen({...open, register: false});
    };

    return (
        <>
        <div className={classes.wrapper}>
            <div className={classes.blueSide}>
                <div className={classes.twitterIconBlueSide}>
                    <TwitterIcon />
                </div>
            </div>
            <div className={classes.loginSide}>
                <div className={classes.twitterIconLoginSide}>
                    <TwitterIcon color='primary'/>
                </div>
                <div className={classes.loginSideTitle}>
                    <Typography >
                        В курсе происходящего
                    </Typography>
                </div>
                <div className={classes.loginSideText}>
                    <Typography >
                        Присоединяйтесь к Твиттеру прямо сейчас!
                    </Typography>
                </div>
                <div className={classes.registerButton} onClick={handleClickOpenRegister}>
                    <Button sx={{
                        "&:hover": {
                            backgroundColor: 'none',
                        }
                    }}>
                        Зарегистрироваться
                    </Button>
                </div>
                <div className={classes.registerPrivateText}>
                    <Typography>
                        Регистрируясь, вы соглашаетесь с Условиями предоставления услуг и Политикой конфиденциальности, а также с Политикой использования файлов cookie.
                    </Typography>
                </div>
                <div className={classes.loginButton}>
                    Уже зарегистрированы?
                    <Link color="primary" onClick={handleClickOpenLogin}>
                        Войдите
                    </Link>
                </div>
            </div>
        </div>
    {
        open.login && <FormDialog open={open.login} closeModal={handleCloseLogin}/>
    }
            {
                open.register && <FormDialogRegister open={open.register} closeModal={handleCloseRegister}/>
            }
    </>
    )
}

export default SignIn
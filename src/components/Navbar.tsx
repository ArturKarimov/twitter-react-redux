import React from 'react';
import {Box, Button, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Paper} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import NotificationIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/MailOutline";
import SaveIcon from "@mui/icons-material/TurnedInNot";
import ListIcon from "@mui/icons-material/ListAlt";
import UserIcon from "@mui/icons-material/PersonOutline";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import {makeStyles} from "@mui/styles";
import SignComponentNavbar from "./SignComponentNavbar";
import TextFieldModalItem from "./TextFieldModalItem";
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    navbarMenu: {
        marginRight: '20px',
        '& li': {
            borderRadius: '30px'
        }
    },
    navbar: {
        '& span': {
            fontSize: '20px',
            lineHeight: '24px',
            marginLeft: '14px',
            padding: '10px',
        },
        width: 'fit-content',
    },
    mainItemText: {
        '& span': {
            fontWeight: 800
        }
    },
    twitterIconNavbar: {
        '& svg': {
            fontSize: '34px',
        },
    }
}))

const Navbar = () => {

    const classes = useStyles()

    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpenTextField = () => {
        setOpen(true);
    };

    const handleCloseTextField = () => {
        setOpen(false);
    };

    return (
        <Box sx={{width: '24%'}}>
            <Paper sx={{
                height: '100vh',
                padding: '12px',
                borderLeft: 'none',
                borderTop: 'none',
                borderBottom: 'none'
            }}
                   variant="outlined"
                   square
            >
                <Link to={'/home'}>
                    <IconButton className={classes.twitterIconNavbar} sx={{marginLeft: '8px'}}>
                        <TwitterIcon color='primary'/>
                    </IconButton>
                </Link>

                <MenuList className={classes.navbarMenu}>
                    <Link to={'/home'} style={{textDecoration: 'none', color: 'inherit'}}>
                    <MenuItem className={classes.navbar}>
                            <ListItemIcon>
                                <HomeIcon sx={{color: '#000', fontSize: '32px'}}/>
                            </ListItemIcon>
                            <ListItemText className={classes.mainItemText}>Главная</ListItemText>
                    </MenuItem>
                    </Link>
                    <MenuItem className={classes.navbar}>
                        <ListItemIcon>
                            <Grid3x3Icon sx={{color: '#000', fontSize: '32px'}}/>
                        </ListItemIcon>
                        <ListItemText>Обзор</ListItemText>
                    </MenuItem>
                    <MenuItem className={classes.navbar}>
                        <ListItemIcon>
                            <NotificationIcon sx={{color: '#000', fontSize: '32px'}}/>
                        </ListItemIcon>
                        <ListItemText>Уведомления</ListItemText>
                    </MenuItem>
                    <MenuItem className={classes.navbar}>
                        <ListItemIcon>
                            <MessageIcon sx={{color: '#000', fontSize: '32px'}}/>
                        </ListItemIcon>
                        <ListItemText>Сообщения</ListItemText>
                    </MenuItem>
                    <MenuItem className={classes.navbar}>
                        <ListItemIcon>
                            <SaveIcon sx={{color: '#000', fontSize: '32px'}}/>
                        </ListItemIcon>
                        <ListItemText>Закладки</ListItemText>
                    </MenuItem>
                    <MenuItem className={classes.navbar}>
                        <ListItemIcon>
                            <ListIcon sx={{color: '#000', fontSize: '32px'}}/>
                        </ListItemIcon>
                        <ListItemText>Списки</ListItemText>
                    </MenuItem>
                    <MenuItem className={classes.navbar}>
                        <ListItemIcon>
                            <UserIcon sx={{color: '#000', fontSize: '32px'}}/>
                        </ListItemIcon>
                        <ListItemText>Профиль</ListItemText>
                    </MenuItem>
                    <MenuItem className={classes.navbar}>
                        <ListItemIcon>
                            <MoreIcon sx={{
                                color: '#000',
                                fontSize: '32px',
                                border: '1px solid #000',
                                borderRadius: '50%'
                            }}/>
                        </ListItemIcon>
                        <ListItemText>Еще</ListItemText>
                    </MenuItem>
                </MenuList>
                <Button variant='contained'
                        fullWidth
                        sx={{padding: '15px', borderRadius: '30px', textTransform: 'none',
                    fontWeight: 800, fontSize: '17px', marginBottom: '100px'}}
                        onClick={handleOpenTextField}
                >
                    Твитнуть
                </Button>
                <SignComponentNavbar/>
                {open && <TextFieldModalItem open={open} closeModal={handleCloseTextField}/>}
            </Paper>
        </Box>
    );
};

export default Navbar;
import React from 'react';
import {Avatar, Box, IconButton, Typography} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    signWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 8px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)'
        }
    },
    signItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    signInfo: {
        '& p': {
            fontSize: '15px'
        }
    }
}))

const SignComponentNavbar = () => {

    const classes = useStyles()

    return (
        <Box>
                <Box className={classes.signWrapper}>
                    <Avatar sx={{
                        marginRight: '15px',
                        width: '40px',
                        height: '40px',
                        cursor: 'pointer'
                    }}
                            src={'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859'}/>
                    <div>
                        <div className={classes.signItem}>
                            <div className={classes.signInfo}>
                                <Typography style={{fontWeight: 700}}>
                                    Артур
                                </Typography>
                                <Typography style={{color: 'rgb(83, 100, 113)'}}>
                                    @arturkarimov_
                                </Typography>
                            </div>
                            <IconButton>
                                <MoreIcon color='primary' fontSize='small'/>
                            </IconButton>
                        </div>
                    </div>


                </Box>
        </Box>
    );
};

export default SignComponentNavbar;
import React, {FC} from 'react';
import Typography from "@mui/material/Typography/Typography";
import {Avatar, Box, Button} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    actualTopic: {
        cursor: 'pointer',
        padding: '10px 16px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
        },
        '&:last-child:hover': {
            borderRadius: '0 0 20px 20px',
        },
        '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.06)'
        }
    },
    user: {
        display: 'flex',
        alignItems: 'center'
    },
    readBtn: {
        borderRadius: '30px',
        padding: '0 16px',
        fontWeight: 800,
        textTransform: 'none',
        fontSize: '14px',
        minWidth: '32px',
        height: '32px',
        backgroundColor: 'black',
        color: '#fff',
        '&:hover': {
            background: 'rgb(44,44,44)'
        },

    }
}))

const UserTag: FC = () => {

    const classes = useStyles()

    return (
        <div className={classes.actualTopic}>
            <Box>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div className={classes.user}>
                        <Avatar sx={{
                            marginRight: '15px',
                            width: '48px',
                            height: '48px',
                            cursor: 'pointer'
                        }}
                                src={'https://source.unsplash.com/random/48x48?2'}
                        />
                        <div>
                            <Typography style={{fontWeight: 700, color: 'black'}}>
                                Артур Каримов
                            </Typography>
                            <Typography style={{color: 'rgb(83, 100, 113)'}}>
                                @arturkarimov
                            </Typography>
                        </div>
                    </div>
                    <Button
                            className={classes.readBtn}
                            sx={{

                            }}
                    >
                        Читать
                    </Button>
                </div>
            </Box>
        </div>
    );
};

export default UserTag;
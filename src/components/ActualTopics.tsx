import Button from '@mui/material/Button/Button';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import {makeStyles} from "@mui/styles";

import {IconButton} from "@mui/material";
import SettingIcon from '@mui/icons-material/SettingsOutlined';
import MoreIcon from "@mui/icons-material/MoreHoriz";

const useStyles = makeStyles(theme => ({
    actualTopics: {
        border: '1px solid transparent',
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        borderRadius: '20px',
        marginTop: '15px',
    },
    actualTopic: {
        cursor: 'pointer',
        padding: '10px 16px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
        },
        '&:last-child:hover': {
            borderRadius: '0 0 20px 20px',
        },
        '& button:hover': {
            background: 'transparent'
        },
        '& button:focus span': {
            background: 'transparent'
        },
        '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.06)'
        }
    },
    cardItem: {
        '&:last-child': {
            paddingBottom: 0,

        }
    }
}))

const ActualTopics = () => {

    const classes = useStyles()


    return (
        <div className={classes.actualTopics}>
            <CardContent sx={{padding: 0}} className={classes.cardItem}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px'}}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 800 }}>
                        Актуальные темы для вас
                    </Typography>
                    <IconButton>
                        <SettingIcon sx={{fontSize: '20px'}}/>
                    </IconButton>
                </div>
                <div className={classes.actualTopic}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '20px'}}>
                        <Typography sx={{fontSize: '13px', color: 'rgb(83, 100, 113)'}}>
                            Актуальные темы: Россия
                        </Typography>
                        <IconButton>
                            <MoreIcon />
                        </IconButton>
                    </div>

                    <Typography sx={{fontSize: '15px', color: 'rgb(0, 0, 0)', fontWeight: 700, marginBottom: '2px'}}>
                        Польша
                    </Typography>
                    <Typography sx={{fontSize: '13px', color: 'rgba(0, 0, 0, 0.87)'}}>
                        Твитов: 4812
                    </Typography>
                </div>
                <div className={classes.actualTopic}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '20px'}}>
                        <Typography sx={{fontSize: '13px', color: 'rgb(83, 100, 113)'}}>
                            Актуальные темы: Россия
                        </Typography>
                        <IconButton>
                            <MoreIcon />
                        </IconButton>
                    </div>

                    <Typography sx={{fontSize: '15px', color: 'rgb(0, 0, 0)', fontWeight: 700, marginBottom: '2px'}}>
                        Польша
                    </Typography>
                    <Typography sx={{fontSize: '13px', color: 'rgba(0, 0, 0, 0.87)'}}>
                        Твитов: 4812
                    </Typography>
                </div>
                <div className={classes.actualTopic} style={{marginBottom: 0}}>
                    <Button fullWidth size="small">Learn More</Button>
                </div>
            </CardContent>
        </div>
    );
};

export default ActualTopics;
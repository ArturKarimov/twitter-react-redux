import Button from '@mui/material/Button/Button';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import {makeStyles} from "@mui/styles";

import {IconButton} from "@mui/material";
import SettingIcon from '@mui/icons-material/SettingsOutlined';
import Tag from "./Tag";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {LoadingState} from "../../store/ducks/tags/contracts/types";
import LoadingItem from '../LoadingItem';
import {Link} from 'react-router-dom';

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

    const {items, loadingStatus} = useTypedSelector(state => state.tags)

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
                {
                    loadingStatus === LoadingState.LOADING
                        ? <LoadingItem />
                        : items.map(tag =>
                        <Link to={`/home/search/${tag.name}`} style={{textDecoration: 'none'}} key={tag.name}><Tag tag={tag}/></Link> )
                }
                <div className={classes.actualTopic} style={{marginBottom: 0}}>
                    <Button fullWidth size="small">Learn More</Button>
                </div>
            </CardContent>
        </div>
    );
};

export default ActualTopics;
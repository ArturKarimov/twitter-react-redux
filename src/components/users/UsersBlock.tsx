import Button from '@mui/material/Button/Button';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import React, {FC} from 'react';
import {makeStyles} from "@mui/styles";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {LoadingState} from "../../store/ducks/tags/contracts/types";
import LoadingItem from '../LoadingItem';
import {Link} from 'react-router-dom';
import UserTag from "./UserTag";

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

const ActualTopics: FC = () => {

    const classes = useStyles()

    const {data, loadingStatus} = useTypedSelector(state => state.users)

    // const items = [
    //     {
    //         "name": "оксимиронвернись",
    //         "count": 2054,
    //         "country": "Россия"
    //     },
    //     {
    //         "name": "Россия",
    //         "count": 437,
    //         "country": "Россия"
    //     },
    //     {
    //         "name": "Лунтик возвращается",
    //         "count": 6582,
    //         "country": "Россия"
    //     },
    //     {
    //         "name": "новыйгод2022",
    //         "count": 3898,
    //         "country": "Россия"
    //     },
    //     {
    //         "name": "Отпуск",
    //         "count": 7139,
    //         "country": "Россия"
    //     }
    // ]

    return (
        <div className={classes.actualTopics}>
            <CardContent sx={{padding: 0}} className={classes.cardItem}>
                <div style={{padding: '16px'}}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 800 }}>
                        Кого читать
                    </Typography>
                </div>
                {
                    loadingStatus === LoadingState.LOADING
                        ? <LoadingItem />
                        : !data ? null
                        : data.map(user =>
                        <Link to={`/home/search/${user.fullname}`} style={{textDecoration: 'none'}}><UserTag /></Link> )
                }
                <div className={classes.actualTopic} style={{marginBottom: 0}}>
                    <Button fullWidth size="small">Learn More</Button>
                </div>
            </CardContent>
        </div>
    );
};

export default ActualTopics;
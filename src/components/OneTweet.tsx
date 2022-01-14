import React, {FC, useEffect, useState} from 'react';

import {makeStyles} from "@mui/styles";

import {Avatar, Box, IconButton, Paper, Typography} from '@mui/material';

import MoreIcon from "@mui/icons-material/MoreHoriz";
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import RepostIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/VerticalAlignTop';
import {Tweet} from "../store/ducks/tweets/contracts/types";
import AddCommentToTweet from "./AddCommentToTweet";
import {useParams} from 'react-router';
import {tweetsApi} from "../api/tweets/tweetsApi";
import LoadingItem from "./LoadingItem";
import format from 'date-fns/format'
import ruLang from "date-fns/locale/ru";


const useStyles = makeStyles(theme => ({
    postItemWrapper: {
        padding: '8px 17px',
        a: {
            textDecoration: 'none'
        }
    },
    postItem: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    postInfo: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            marginRight: '10px',
            fontSize: '15px',
            cursor: 'pointer'
        },
    },
    postItemButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '425px',
        margin: '0 auto'
    },
    postItemBtn: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& svg': {
            fontSize: '20px',
            color: 'rgb(83, 100, 113)'
        },
        '& p': {
            fontSize: '15px',
            color: 'rgb(83, 100, 113)'
        }
    },
    tweetText: {
        fontSize: '23px',
        lineHeight: '28px',
        marginTop: '12px'
    },
    tweetTextDateInfo: {
        fontSize: '15px',
        color: 'rgb(83, 100, 113)',
        margin: '16px 0',
        '& span': {
            margin: '0 5px'
        }
    }


}))


const OneTweet: FC = () => {

    const [item, setItem] = useState<Tweet>()
    const [loading, setLoading] = useState<boolean>(false)
    const {idtweet} = useParams()

    async function fetchOneTweet() {

        setLoading(true)
        const response = await tweetsApi.fetchTweetById(idtweet)
        setItem(response)
        setLoading(false)
    }


    useEffect(() => {
        fetchOneTweet()
    }, [])

    const classes = useStyles()

    return (
        loading ? <LoadingItem /> :
        <Box>
            <Paper variant="outlined" square sx={{
                borderLeft: 'none',
                borderTop: 'none',
                borderRight: 'none'
            }}>
                <Box className={classes.postItemWrapper}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex'}}>
                            <Avatar sx={{
                                marginRight: '15px',
                                width: '48px',
                                height: '48px',
                                cursor: 'pointer'
                            }}
                                    src={item?.user.avatarUrl}/>
                            <div className={classes.postItem}>
                                <div className={classes.postInfo}>
                                    <div style={{fontWeight: 700, lineHeight: '1'}}>
                                        {item?.user.fullname}
                                        <Typography style={{color: 'rgb(83, 100, 113)'}}>
                                            {item?.user.username}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <IconButton>
                                <MoreIcon color='primary' fontSize='small'/>
                            </IconButton>
                        </div>
                    </div>

                    <div>
                        <Typography className={classes.tweetText}>
                            {item?.text}
                        </Typography>
                        <div style={{maxWidth: '502px'}}>
                            <img style={{maxWidth: '502px', borderRadius: '10px', marginTop: '10px'}}
                                 src={item?.user.avatarUrl} alt={item?.user.username}
                            />
                        </div>
                        <div>
                            <Typography component={'span'} className={classes.tweetTextDateInfo}>
                                {format(new Date(item?.createdAt || null), 'H:mm')}
                                <span>
                                    &middot;
                                </span>
                                {format(new Date(item?.createdAt || null), 'dd MMM yyyy г.', {locale: ruLang})}
                            </Typography>
                        </div>
                        <Paper variant="outlined" square sx={{
                            borderLeft: 'none',
                            borderRight: 'none',
                            padding: '6px 0',
                            marginBottom: '5px'
                        }}>
                            <div className={classes.postItemButtons}>
                                <div className={classes.postItemBtn}>
                                    <IconButton>
                                        <MessageIcon color='inherit' fontSize='small'/>
                                    </IconButton>
                                    <Typography>21</Typography>
                                </div>
                                <div className={classes.postItemBtn}>
                                    <IconButton>
                                        <RepostIcon color='inherit' fontSize='small'/>
                                    </IconButton>
                                    <Typography>46</Typography>
                                </div>
                                <div className={classes.postItemBtn}>
                                    <IconButton>
                                        <LikeIcon color='inherit' fontSize='small'/>
                                    </IconButton>
                                    <Typography>32</Typography>
                                </div>
                                <div className={classes.postItemBtn}>
                                    <IconButton>
                                        <PublishIcon color='inherit' fontSize='small'/>
                                    </IconButton>
                                </div>
                            </div>
                        </Paper>
                        <AddCommentToTweet minRows={1}/>
                    </div>
                </Box>
            </Paper>
        </Box>
    );
};

export default OneTweet;
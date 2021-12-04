import React, {FC} from 'react';

import {makeStyles} from "@mui/styles";

import {Avatar, Box, IconButton, Paper, Typography} from '@mui/material';

import MoreIcon from "@mui/icons-material/MoreHoriz";
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import RepostIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/VerticalAlignTop';
import {Tweet} from "../store/ducks/tweets/contracts/types";


const useStyles = makeStyles(theme => ({
    postItemWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '8px 17px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)'
        },
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
        marginTop: '3px'
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
    }


}))

interface PostItemProps {
    item: Tweet
}

const PostItem: FC<PostItemProps> = ({item}) => {

    const classes = useStyles()


    return (
        <Box>
            <Paper variant="outlined" square sx={{
                borderLeft: 'none',
                borderTop: 'none',
                borderRight: 'none'
            }}>
                <Box className={classes.postItemWrapper}>
                    <Avatar sx={{
                        marginRight: '15px',
                        width: '48px',
                        height: '48px',
                        cursor: 'pointer'
                    }}
                            src={item.user.avatarUrl}/>
                    <div>
                        <div className={classes.postItem}>
                            <div className={classes.postInfo}>
                                <Typography style={{fontWeight: 700}}>
                                    {item.user.fullName}
                                </Typography>
                                <Typography style={{color: 'rgb(83, 100, 113)'}}>
                                    {item.user.userName}
                                </Typography>
                                <span style={{marginRight: '10px'}}>
                                    &middot;
                                </span>

                                <Typography style={{color: 'rgb(83, 100, 113)'}}>
                                    9 нояб.
                                </Typography>
                            </div>
                            <IconButton>
                                <MoreIcon color='primary' fontSize='small'/>
                            </IconButton>
                        </div>
                        <Typography>
                            {item.text}
                        </Typography>
                        <div style={{maxWidth: '502px'}}>
                            <img style={{maxWidth: '502px', borderRadius: '10px', marginTop: '10px'}}
                                src={item.user.avatarUrl} alt={item.user.userName}
                            />
                        </div>

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
                    </div>


                </Box>
            </Paper>
        </Box>
    );
};

export default PostItem;
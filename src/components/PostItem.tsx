import React, {FC} from 'react';

import {makeStyles} from "@mui/styles";

import {Avatar, Box, IconButton, Menu, MenuItem, Paper, Typography} from '@mui/material';

import MoreIcon from "@mui/icons-material/MoreHoriz";
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import RepostIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/VerticalAlignTop';
import {Tweet} from "../store/ducks/tweets/contracts/types";
import {formatDate} from "../utils/formatDate";
import {tweetsApi} from "../api/tweets/tweetsApi";
import {fetchTweets} from "../store/ducks/tweets/contracts/actionCreators";
import {useDispatch} from "react-redux";


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
    post: {
        flex: 1
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

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setAnchorEl(null);
    };

    const deleteTweet = async (event: React.MouseEvent, id: string) => {
        event.stopPropagation()
        event.preventDefault()
        await tweetsApi.deleteTweet(id)
        setAnchorEl(null)
    }

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
                    <div className={classes.post}>
                        <div className={classes.postItem}>
                            <div className={classes.postInfo}>
                                <Typography style={{fontWeight: 700}}>
                                    {item.user.fullname}
                                </Typography>
                                <Typography style={{color: 'rgb(83, 100, 113)'}}>
                                    {item.user.username}
                                </Typography>
                                <span style={{marginRight: '10px'}}>
                                    &middot;
                                </span>

                                <Typography style={{color: 'rgb(83, 100, 113)'}}>
                                    {formatDate(new Date(item.createdAt))}
                                </Typography>
                            </div>
                            <div>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MoreIcon color='primary' fontSize='small'/>
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        Редактировать
                                    </MenuItem>
                                    <MenuItem onClick={(event) => deleteTweet(event, item._id)}>
                                        Удалить
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <Typography>
                            {item.text}
                        </Typography>
                        <div style={{maxWidth: '502px'}}>
                            <img style={{maxWidth: '502px', borderRadius: '10px', marginTop: '10px'}}
                                 src={item.user.avatarUrl} alt={item.user.username}
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
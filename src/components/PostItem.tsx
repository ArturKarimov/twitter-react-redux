import React from 'react';

import {makeStyles} from "@mui/styles";

import {Avatar, Box, IconButton, ImageList, ImageListItem, Paper, Typography} from '@mui/material';

import MoreIcon from "@mui/icons-material/MoreHoriz";
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import RepostIcon from '@mui/icons-material/Repeat';
import LikeIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/VerticalAlignTop';



const useStyles = makeStyles(theme => ({
    postItemWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '8px 17px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)'
        }
    },
    postItem: {
        display: 'flex',
        justifyContent: 'space-between'
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

const PostItem = () => {

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
                            src={'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859'}/>
                    <div>
                        <div className={classes.postItem}>
                            <div className={classes.postInfo}>
                                <Typography style={{fontWeight: 700}}>
                                    Artur Karimov
                                </Typography>
                                <Typography style={{color: 'rgb(83, 100, 113)'}}>
                                    @arturkarimov_
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sequi, unde. Amet autem,
                            corporis deleniti dicta dolorum ea eum facilis, harum labore obcaecati odio, officia porro
                            quibusdam sint suscipit! Et!
                        </Typography>
                        <div style={{maxWidth: '502px'}}>
                            <img style={{maxWidth: '502px', borderRadius: '10px', marginTop: '10px'}}
                                src={'https://pbs.twimg.com/card_img/1457174610114400262/zUdeNDgw?format=jpg&name=medium'}
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
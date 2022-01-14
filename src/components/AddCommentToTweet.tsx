import React, {FC, useState} from 'react';
import {makeStyles} from "@mui/styles";
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    IconButton,
    Paper,
    Typography,
    TextareaAutosize
} from "@mui/material";
import ImageIcon from "@mui/icons-material/CropOriginal";
import GifIcon from "@mui/icons-material/Gif";
import SmileIcon from "@mui/icons-material/Mood";
import {calcTextLength} from "../services/calcTextLength";


const useStyles = makeStyles(theme => ({

    textFieldButton: {
        '& button': {
            textTransform: 'none',
            fontWeight: 800,
            fontSize: '15px'
        }
    },
    textareaForm: {
        maxWidth: '545px',
        resize: 'none',
        fontSize: '20px',
        border: 'none',
        '&:focus-visible': {
            border: 'none',
            outline: 'none',
        },
        '&::placeholder': {
            fontSize: '20px'
        }
    },

    textareaBtn: {
        '&:disabled': {
            opacity: 0.5,
            backgroundColor: 'rgb(29, 161, 242)',
            color: '#fff',
            textTransform: 'none',
            fontWeight: 800
        }
    },
    commentInfo: {
        marginLeft: '65px',
        color: 'rgb(83, 100, 113)',
        fontSize: '15px',
        paddingTop: '12px',
        '& span': {
            color: 'rgb(29, 161, 242)',
            cursor: 'pointer'
        }
    }

}))

interface TextFieldProps {
    minRows: number
}

const AddCommentToTweet: FC<TextFieldProps> = ({minRows}) => {

    const [commentField, setCommentField] = useState(false)

    const classes = useStyles()

    const [postText, setPostText] = useState<string>('')

    const currentTextLength = calcTextLength(postText.length)

    const handleTextarea = () => {
        setCommentField(true)
    }


    return (
        <>

            <Paper variant="outlined" square sx={{
                border: 'none',
            }}>

                {
                    commentField && <Typography className={classes.commentInfo}>
                        В ответ
                        &nbsp;
                        <span>@arturkarimov_</span>
                    </Typography>
                }

                <Box sx={{display: 'flex', justifyContent: 'space-between',alignItems: 'center', padding: '5px 2px'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Avatar sx={{
                            marginRight: '15px',
                            width: '48px',
                            height: '48px',
                            cursor: 'pointer'
                        }}
                                src={'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859'}/>
                        <TextareaAutosize className={classes.textareaForm}
                                          id="input-with-sx"
                                          value={postText}
                                          onChange={e => setPostText(e.target.value)}
                                          minRows={minRows}
                                          placeholder="Твитнуть в ответ"
                                          onClick={handleTextarea}
                        />
                    </div>


                        {
                            !commentField &&
                            <Button className={classes.textareaBtn} variant='contained' sx={{borderRadius: '30px'}}
                                    disabled={!postText}
                            >
                                Ответить
                            </Button>
                        }


                </Box>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {
                        commentField &&
                        <div style={{marginLeft: '71px'}}>
                            <IconButton>
                                <ImageIcon color='primary' fontSize='small'/>
                            </IconButton>
                            <IconButton>
                                <GifIcon color='primary' fontSize='small'/>
                            </IconButton>
                            <IconButton>
                                <SmileIcon color='primary' fontSize='small'/>
                            </IconButton>
                        </div>
                    }

                    {
                        postText &&

                        <div style={{position: 'relative', marginLeft: '180px'}}>
                            <CircularProgress style={{}}
                                              size={postText.length <= 259 ? '20px' : '28px'}
                                              variant="determinate" value={100}
                                              sx={{
                                                  color: `${postText.length >= 280 ? 'red' : 'rgb(239, 243, 244)'}`,

                                              }}
                            />
                            <Box>
                                <CircularProgress style={{position: "absolute", top: 0, left: 0}}
                                                  size={postText.length <= 259 ? '20px' : '28px'}
                                                  variant="determinate" value={currentTextLength}
                                                  color={postText.length <= 259 ? 'primary' : postText.length >= 280 ? 'error' : 'secondary'}
                                />
                                <Box sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: '2px',
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Typography variant="caption" component="div"
                                                color={postText.length >= 280 ? 'error' : ''}
                                                sx={{fontSize: '13px'}}>
                                        {postText.length <= 259 ? '' : (280 - postText.length)}
                                    </Typography>
                                </Box>

                            </Box>

                        </div>
                    }
                    <div className={classes.textFieldButton}>
                        {
                            commentField &&
                            <Button className={classes.textareaBtn} variant='contained' sx={{borderRadius: '30px'}}
                                    disabled={!postText}
                            >
                                Ответить
                            </Button>
                        }

                    </div>
                </div>
            </Paper>
        </>
    );
};

// @ts-ignore
export default AddCommentToTweet
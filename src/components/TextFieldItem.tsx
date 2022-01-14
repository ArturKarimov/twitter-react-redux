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
import EarthIcon from "@mui/icons-material/Public";
import ImageIcon from "@mui/icons-material/CropOriginal";
import GifIcon from "@mui/icons-material/Gif";
import StatisticIcon from "@mui/icons-material/AlignHorizontalLeft";
import SmileIcon from "@mui/icons-material/Mood";
import EventIcon from "@mui/icons-material/Event";
import {calcTextLength} from "../services/calcTextLength";
import {useDispatch} from "react-redux";
import {fetchAddTweet} from "../store/ducks/tweets/contracts/actionCreators";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {LoadingAddTweet} from "../store/ducks/tweets/contracts/types";


const useStyles = makeStyles(theme => ({

    afterInputItem: {
        display: 'flex',
        marginLeft: '80px',
        alignItems: 'center',
        borderBottom: '1px solid rgb(239, 243, 244)',
        width: '501px',
        paddingBottom: '15px',
        '& svg': {
            fontSize: '18px'
        }
    },
    textFieldButton: {
        '& button': {
            textTransform: 'none',
            fontWeight: 800,
            fontSize: '15px'
        }
    },
    textareaForm: {
        width: '502px',
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
        width: '104px',
        height: '38px',
        '&:disabled': {
            opacity: 0.5,
            backgroundColor: 'rgb(29, 161, 242)',
            color: '#fff'
        }
    }

}))

interface TextFieldProps {
    minRows: number,
    closeModal?: () => void | undefined
}

const TextFieldItem: FC<TextFieldProps> = ({minRows, closeModal}) => {

    const classes = useStyles()

    const dispatch = useDispatch()
    const {loadingAddTweet} = useTypedSelector(state => state.tweets)

    const [postText, setPostText] = useState<string>('')

    const currentTextLength = calcTextLength(postText.length)

    const handleAddTweet = () => {
        setPostText('')
        dispatch(fetchAddTweet(postText))
        if (closeModal) {
            closeModal()
        }
    }


    return (
        <>

            <Paper variant="outlined" square sx={{
                borderLeft: 'none',
                borderTop: 'none',
                borderRight: 'none'
            }}>
                <Box sx={{display: 'flex', alignItems: 'center', padding: '8px 17px'}}>
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
                                      placeholder="Что происходит?"
                    />
                </Box>
                <div className={classes.afterInputItem}>
                    <EarthIcon color='primary'/>
                    <Typography color='primary'
                                sx={{
                                    marginLeft: '3px',
                                    fontSize: '14px',
                                    fontWeight: 800
                                }}>
                        Отвечать могут все пользователи
                    </Typography>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px 15px 10px 0',
                    alignItems: 'center'
                }}>
                    <div style={{marginLeft: '71px'}}>
                        <IconButton>
                            <ImageIcon color='primary' fontSize='small'/>
                        </IconButton>
                        <IconButton>
                            <GifIcon color='primary' fontSize='small'/>
                        </IconButton>
                        <IconButton>
                            <StatisticIcon color='primary' fontSize='small'/>
                        </IconButton>
                        <IconButton>
                            <SmileIcon color='primary' fontSize='small'/>
                        </IconButton>
                        <IconButton>
                            <EventIcon color='primary' fontSize='small'/>
                        </IconButton>
                    </div>
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
                        <Button className={classes.textareaBtn} variant='contained' sx={{borderRadius: '30px'}} disabled={!postText || postText.length === 281 || loadingAddTweet === LoadingAddTweet.LOADING}
                                onClick={handleAddTweet}
                        >
                            {
                                loadingAddTweet === 'LOADING' ? <CircularProgress color='info' size={25}/> : 'Твитнуть'
                            }
                        </Button>
                    </div>
                </div>
            </Paper>
        </>
    );
};

// @ts-ignore
export default TextFieldItem
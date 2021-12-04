import {Box, Container, IconButton, Paper, Typography} from '@mui/material';
import BackIcon from '@mui/icons-material/ArrowBack';
import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import SearchTextField from "../components/SearchTextField";
import ActualTopics from "../components/actualTags/ActualTopics";
import {useDispatch} from "react-redux";
import {fetchTweets} from "../store/ducks/tweets/contracts/actionCreators";
import {fetchTags} from "../store/ducks/tags/contracts/actionCreators";
import {Outlet} from 'react-router-dom';
import {useNavigate, useParams} from "react-router";


const TwitterHome = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
    }, [dispatch])

    const {idtweet, tagname} = useParams()
    const navigate = useNavigate()


    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <Container maxWidth="lg" sx={{height: '100vh', display: 'flex'}}
                   style={{padding: '0', marginLeft: '75px', marginRight: '75px'}}>
            <Navbar/>
            <Box sx={{width: '50%'}}>
                <Paper sx={{height: '100vh', borderLeft: 'none', borderTop: 'none', borderBottom: 'none'}}
                       variant="outlined" square>
                    <Paper variant="outlined" square sx={{
                        borderLeft: 'none',
                        borderTop: 'none',
                        borderRight: 'none',
                        padding: '10px',
                        height: 'fit-content'
                    }}>
                        {
                            idtweet || tagname ?
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <IconButton style={{marginRight: '20px'}} onClick={handleGoBack}>
                                        <BackIcon fontSize={'small'}/>
                                    </IconButton>
                                <Typography sx={{fontWeight: 800}} variant='h6'>Твит</Typography>
                                </div>
                                : <Typography sx={{fontWeight: 800}} variant='h6'>Главная</Typography>
                        }

                    </Paper>
                    <Outlet/>
                </Paper>
            </Box>
            <Box sx={{width: '30.5%', paddingLeft: '35px'}}>
                <Paper sx={{
                    height: '100vh',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderTop: 'none',
                    borderBottom: 'none',

                }} variant="outlined" square>
                    <SearchTextField/>
                    <ActualTopics/>
                </Paper>
            </Box>
        </Container>

    );
};

export default TwitterHome;
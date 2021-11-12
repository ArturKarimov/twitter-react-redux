import {
    Box,
    Container,
    Paper
} from '@mui/material';
import React from 'react';
import TextFieldItem from "../components/TextFieldItem";
import Navbar from "../components/Navbar";
import PostItem from "../components/PostItem";
import SearchTextField from "../components/SearchTextField";
import ActualTopics from "../components/ActualTopics";


const TwitterHome = () => {

    return (
        <Container maxWidth="lg" sx={{height: '100vh', display: 'flex'}}
                   style={{padding: '0', marginLeft: '75px', marginRight: '75px'}}>
            <Navbar />
            <Box sx={{width: '50%'}}>
                <Paper sx={{height: '100vh', borderLeft: 'none', borderTop: 'none', borderBottom: 'none'}}
                       variant="outlined" square>
                    <TextFieldItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
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
                    <SearchTextField />
                    <ActualTopics />
                </Paper>
            </Box>
        </Container>

    );
};

export default TwitterHome;
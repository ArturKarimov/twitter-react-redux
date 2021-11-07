import {Box, Container, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography} from '@mui/material';
import React from 'react';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';

const TwitterHome = () => {
    return (
        <Container maxWidth="lg" sx={{height: '100vh', display: 'flex'}} style={{padding: '0'}}>

            <Box sx={{width: '19.5%'}}>
                <Paper sx={{height: '100vh',
                    padding: '12px',
                    borderLeft: 'none',
                    borderTop: 'none',
                    borderBottom: 'none'}}
                       variant="outlined"
                       square
                >
                    <MenuList>
                        <MenuItem sx={{width: 'fit-content'}}>
                            <ListItemIcon>
                                <Grid3x3Icon sx={{color: '#000', fontSize: '32px'}}/>
                            </ListItemIcon>
                            <ListItemText>Обзор</ListItemText>
                        </MenuItem>
                    </MenuList>

                </Paper>
            </Box>
            <Box sx={{width: '50%'}}>
                <Paper sx={{height: '100vh', borderLeft: 'none', borderTop: 'none', borderBottom: 'none'}} variant="outlined" square>
                    Основная часть
                </Paper>
            </Box>
            <Box sx={{width: '30.5%'}}>
                <Paper sx={{height: '100vh', borderLeft: 'none', borderRight: 'none', borderTop: 'none', borderBottom: 'none'}} variant="outlined" square>
                    Другое
                </Paper>
            </Box>
        </Container>

    );
};

export default TwitterHome;
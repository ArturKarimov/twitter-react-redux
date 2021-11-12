
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import TextField from '@mui/material/TextField/TextField';
import React from 'react';
import {makeStyles} from "@mui/styles";

import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(theme => ({
    searchItem: {
        width: '350px',
        marginTop: '10px',
        border: '1px solid transparent',
        borderRadius: '30px',
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
        height: '44px',
        display: 'flex',
        justifyContent: 'center',
        '& svg': {
            paddingLeft: '20px',
            paddingRight: '6px'
        },
        '& input::placeholder': {
            color: '#000'
        },
        '&:hover': {
            backgroundColor: '#fff',
            border: '1px solid rgb(29, 161, 242)'
        }
    }
}))

const SearchTextField = () => {

    const classes = useStyles()

    return (
            <TextField className={classes.searchItem}
                       id="input-with-icon-textfield"
                       placeholder="Поиск в Твиттере"
                       InputProps={{
                           disableUnderline: true,
                           startAdornment: (
                               <InputAdornment position="start">
                                   <SearchIcon />
                               </InputAdornment>
                           ),
                       }}
                       variant="standard"
            />

    );
};

export default SearchTextField;
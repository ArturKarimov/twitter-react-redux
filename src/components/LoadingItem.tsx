import React from 'react';
import LoadingTweetsItem from '@mui/material/CircularProgress';


const LoadingItem = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
            <LoadingTweetsItem />
        </div>
    )
}

export default LoadingItem
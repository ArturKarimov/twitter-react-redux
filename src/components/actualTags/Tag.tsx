import React, {FC} from 'react';
import Typography from "@mui/material/Typography/Typography";
import {IconButton} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import {makeStyles} from "@mui/styles";
import {Tags} from "../../store/ducks/tags/contracts/types";

const useStyles = makeStyles(theme => ({
    actualTopic: {
        cursor: 'pointer',
        padding: '10px 16px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
        },
        '&:last-child:hover': {
            borderRadius: '0 0 20px 20px',
        },
        '& button:hover': {
            background: 'transparent'
        },
        '& button:focus span': {
            background: 'transparent'
        },
        '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.06)'
        }
    },
}))

interface TagsProps {
    tag: Tags
}

const Tag: FC<TagsProps> = ({tag}) => {

    const classes = useStyles()

    return (
        <div className={classes.actualTopic}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '20px'}}>
                <Typography sx={{fontSize: '13px', color: 'rgb(83, 100, 113)'}}>
                    Актуальные темы: {tag.country}
                </Typography>
                <IconButton>
                    <MoreIcon />
                </IconButton>
            </div>

            <Typography sx={{fontSize: '15px', color: 'rgb(0, 0, 0)', fontWeight: 700, marginBottom: '2px'}}>
                {tag.name}
            </Typography>
            <Typography sx={{fontSize: '13px', color: 'rgba(0, 0, 0, 0.87)'}}>
                Твитов: {tag.count}
            </Typography>
        </div>
    );
};

export default Tag;
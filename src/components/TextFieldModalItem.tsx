import * as React from 'react';
import {FC} from 'react';
import Dialog from '@mui/material/Dialog';
import TextFieldItem from "./TextFieldItem";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";


interface TextFieldModalItem {
    open: boolean,
    closeModal: () => void
}


const TextFieldModalItem: FC<TextFieldModalItem> = ({open, closeModal}) => {

    return (
        <div>
            <Dialog open={open} onClose={closeModal}
                    PaperProps={{
                        style: { borderRadius: '16px' }
                    }}>
                <DialogTitle sx={{margin: '0 auto', padding: '8px 0 15px 0'}}>
                    <IconButton
                        aria-label="close"
                        onClick={closeModal}
                        sx={{
                            position: 'absolute',
                            left: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <TextFieldItem minRows={4}/>
            </Dialog>
        </div>
    );
}

export default TextFieldModalItem

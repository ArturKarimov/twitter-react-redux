import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export enum NotificationStatus {
    success = 'success',
    info = 'info',
    warning = 'warning',
    error = 'error'
}

export enum NotificationPositionVertical {
    top = 'top',
    bottom = 'bottom'
}

export enum NotificationPositionHorizontal {
    left = 'left',
    center = 'center',
    right = 'right'
}

interface NotificationProps {
    notificationText: string,
    status: NotificationStatus,
    vertical: NotificationPositionVertical,
    horizontal: NotificationPositionHorizontal
}

export default function Notification({notificationText, status, vertical, horizontal}: NotificationProps) {
    const [open, setOpen] = React.useState(true);

    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: vertical,
                horizontal: horizontal}}>
                <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
                    {notificationText}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
import React from "react";
import {useStyle} from "./AlertConcluded.style";
import concludedimg from "_assets/img/ConcludedImage.svg";
import {Drawer,Box,Typography} from "@material-ui/core";

interface AlertProps {
    open: boolean;
    onClose?: (args: boolean) => void;
    onClick?: React.MouseEventHandler<HTMLElement>;
    title: string;
   }

export const AlertConcluded: React.FC<AlertProps> = ({
   open,
   onClose = () => {},
   onClick,
   title
}) => {
    const styles = useStyle()
    return (
        <Drawer 
        className={styles.drawer}
        anchor="top"
        elevation={5}
        open={open}
        onClose={() => onClose(true)}
        onClick={onClick}
        > 
            <Box className={styles.alertcontainer}>
                <img src={concludedimg} alt="concludedimg" className={styles.imgalert}/>
                <Typography className={styles.txtalert}>{title}</Typography>
            </Box>  
        </Drawer>
    );
}
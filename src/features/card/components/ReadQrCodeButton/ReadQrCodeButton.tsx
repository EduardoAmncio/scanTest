import React from "react";
import {useStyles} from "./ReadQrCodeButton.style";
import {Button} from "components/Button";
import qrCodeIcon from "_assets/icons/QrCodeIconButton.svg";
import {Box} from "@material-ui/core";

export const ReadQrCodeButton: React.FC = () => {
    const styles = useStyles();
    return (
        <Box className={styles.qrCodeButtonStyle}>
            <Button 
                startIcon={<img src={qrCodeIcon} alt="QrCode" className={styles.qrcodeimg}/>}
                palette="secondary"
                onClick={() => {}}
            >
                <span className="labelButtonQrCode">Ler QR Code</span>
            </Button>
        </Box>
    )
}
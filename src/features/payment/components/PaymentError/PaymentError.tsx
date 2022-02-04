import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./PaymentError.style";

export const PaymentError: React.FC = () => {
    
    const styles = useStyles();

    return (
        <Typography className={styles.errorPayment}>
            <div className={styles.fontPayment}>
                Pagamento não reconhecido, tente afastar ou aproximar celular. 
            </div>
        </Typography>
    );
}
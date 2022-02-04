import { Box } from "@material-ui/core";
import React from "react";
import { EnterCodeButton } from "../EnterCodeButton";
import { PaymentError } from "../PaymentError";
import { useStyles } from "./BarcodeFooter.style";

export const BarcodeFooter: React.FC = () => {

  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <EnterCodeButton/>
      <PaymentError/>
    </Box>
  );
};
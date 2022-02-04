import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Validator.styles";
import OtpInput from "react-otp-input";

interface ValidatorProps {
  description?: string;
  strictValidation?: boolean;
  value: string;
  label: string;
  setValue: (value: string) => void;
}

export const Validator: React.FC<ValidatorProps> = ({
  description,
  strictValidation,
  value,
  label,
  setValue,
}) => {
  const styles = useStyles();

  const _getClassName = () => {
    let className = `${styles.passwordInput} `;

    if (value.length < 4) {
      className += styles.passwordInput;
      strictValidation = true;
    }
    strictValidation
      ? (className += styles.passwordInput)
      : (className += styles.inputInvalid);
    return className;
  };

  return (
    <Box>
      <Typography
        className={styles.labelPassword}
        color="primary"
        variant="caption"
        gutterBottom
      >
        <strong>{label} </strong>
      </Typography>
      <Grid container className={styles.centerOtpInput}>
        <Typography className={_getClassName()}>
          {
            <OtpInput
              value={value}
              onChange={setValue}
              isInputSecure={true}
              numInputs={4}
              isInputNum
            />
          }
          {strictValidation
            ? (description = "")
            : (description = "As senhas não conferem")}
        </Typography>
      </Grid>
    </Box>
  );
};

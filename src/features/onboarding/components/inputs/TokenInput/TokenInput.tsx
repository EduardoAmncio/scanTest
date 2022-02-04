import React from "react";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import OtpInput from "react-otp-input";
import { useStyles } from "./TokenInput.style";

interface TokenInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<any>>;
}

export const TokenInput = ({ value, onChange }: TokenInputProps) => {
  const style = useStyles();

  return (
    <Box className={style.cardTokenContext}>
      <Typography
        className={style.cardLabelToken}
        color="primary"
        variant="caption"
        gutterBottom
      >
        Token
      </Typography>
      <Box className={style.boxToken}>
        <OtpInput
          className={style.tokenInput}
          value={value}
          onChange={onChange}
          isInputSecure={true}
          numInputs={6}
          isInputNum
        />
      </Box>
    </Box>
  );
};

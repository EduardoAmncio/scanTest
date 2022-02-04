import { Box, Typography } from "@material-ui/core";
import OtpInput from "react-otp-input";
import { useStyles } from "./InputToken.style";
import React from "react";

interface InputTokenProps {
  value?: string;
  onChange?: Function;
}

export const InputToken: React.FC<InputTokenProps> = ({ value, onChange }) => {
  const style = useStyles();
  return (
    <Box className={style.box}>
      <Box className="boxDescription">
        <Typography className={style.description}>Token</Typography>
      </Box>
      <Box className={style.boxToken}>
        <OtpInput
          className={style.tokeninput}
          numInputs={6}
          separator={""}
          value={value}
          onChange={onChange}
          isInputNum
          isInputSecure={true}
        />
      </Box>
    </Box>
  );
};

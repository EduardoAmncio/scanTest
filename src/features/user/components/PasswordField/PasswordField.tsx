import { Box } from "@material-ui/core";
import React from "react";
import OtpInput from "react-otp-input";
import { useStyles } from "./PasswordField.style";

interface PasswordFieldProps {
  value: string;
  className?: string;
  onChange: (value: string) => void;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  value,
  className,
  onChange,
}) => {
  const styles = useStyles();
  className = `${styles.otp} ${className}`;

  return (
    <Box className={className}>
      <OtpInput
        isInputSecure={true}
        numInputs={6}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

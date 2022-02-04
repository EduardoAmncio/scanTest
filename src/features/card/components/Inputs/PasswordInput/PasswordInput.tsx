import { Typography, Box } from "@material-ui/core";
import OtpInput from "react-otp-input";
import { useStyles } from "./PasswordInput.style";

interface PasswordProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const PasswordInput = ({ label, value, onChange }: PasswordProps) => {
  const style = useStyles();
  return (
    <Box className={style.passwordBody}>
      <Box className={style.passwordContent}>
        <Typography
          className={style.labelPassword}
          color="primary"
          variant="caption"
          gutterBottom
        >
          <strong>{label} </strong>
        </Typography>
        <Box className={style.passwordMargin}>
          <OtpInput
            className={style.passwordInput}
            value={value}
            separator={""}
            onChange={onChange}
            isInputSecure={true}
            numInputs={4}
            isInputNum
          />
        </Box>
      </Box>
    </Box>
  );
};

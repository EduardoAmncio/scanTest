import React,{useState} from "react";
import OtpInput from "react-otp-input";
import {Box} from "@material-ui/core";
import {useStyles} from "./LastDigitsInput.style";

interface PasswordValidationInputProps{
    value: string;
}

export const LastDigitsInput: React.FC<PasswordValidationInputProps> = ({ value }: PasswordValidationInputProps) => {
    const [Digits, setDigits] = useState("");
    const style = useStyles();
    return (
        <Box className={style.passwordInputBody}>
            <Box className={style.passwordInputContent}>     
                <OtpInput 
                    className={style.DigitsInput}
                    value={Digits}
                    onChange={setDigits}
                    isInputSecure={true}
                    numInputs={4}
                />
            </Box>
        </Box>
    );
};
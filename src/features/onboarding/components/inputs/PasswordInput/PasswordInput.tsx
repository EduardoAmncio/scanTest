import React from "react";
import { Typography } from "@material-ui/core";
import OtpInput from 'react-otp-input';

import "./PasswordInput.scss";

interface PasswordProps {
    label: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<any>>;
}
export const PasswordInput: React.FC<PasswordProps> = ({
    label,
    value,
    onChange
}) => {

    return (
        <div className="password-body">
            <div className="password-content">
                <Typography className="label-password" color="primary" variant="caption" gutterBottom>
                    <strong>{label}</strong>
                </Typography>
                <OtpInput
                    className="password-input"
                    value={value}
                    onChange={onChange}
                    isInputSecure={true}
                    numInputs={6}
                />
            </div>
        </div>
    );
};
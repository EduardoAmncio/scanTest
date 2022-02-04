import React from "react";
import { Button } from "@material-ui/core";

import "./QRCodeButton.scss";

interface QRCodeButtonProps {
  imagePath: string;
  title: string
}

export const QRCodeButton = ({ title, imagePath }: QRCodeButtonProps) => {

  return (
    <Button
      className="IDButton"
      variant="outlined"
      color="primary"
      fullWidth
    >
      <div className="propButton" >
        <img src={imagePath} className="iconIDButton" alt="bgButton" />
        <div className="label">
          {title}
        </div>
      </div>
    </Button>
  );
};

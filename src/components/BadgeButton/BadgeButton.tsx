import React from "react";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import "./BadgeButton.scss";

interface BadgeButtonProps {
  imagePath: string;
  title: string;
  redirectRoute: string;
}

export const BadgeButton: React.FC<BadgeButtonProps> = ({
  title,
  imagePath,
  redirectRoute,
}: BadgeButtonProps) => {
  const [redirect, setRedirect] = React.useState(false);

  const handleOnClick = () => {
    setRedirect(true);
  };

  return (
    <>
      {redirect ? <Redirect to={redirectRoute} /> : null}
      <Button
        className="bgButton"
        variant="outlined"
        color="primary"
        onClick={handleOnClick}
        fullWidth
      >
        <div className="propButton">
          <img src={imagePath} className="iconBgButton" alt="bgButton" />
          <div className="label">{title}</div>
        </div>
      </Button>
    </>
  );
};

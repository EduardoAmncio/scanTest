import React from "react";
import { Button } from "@material-ui/core";
import { activateCardLabel } from "constants/buttons/labels";
import { CardRoutes } from "features/card/constants/routes";
import { useHistory } from "react-router-dom";
import { useStyles } from "./ActivateCardButton.style";

export const ActivateCardButton: React.FC = () => {
  const style = useStyles();
  const history = useHistory();

  const onAccessCardClick = () => {
    history.replace(CardRoutes.associateNewCardCheck);
  };

  return (
    <Button
      className={style.activateCardButton}
      variant="outlined"
      color="primary"
      onClick={onAccessCardClick}
    >
      {activateCardLabel}
    </Button>
  );
};

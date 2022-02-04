import React from "react";
import { Button } from "@material-ui/core";
import showBalanceIcon from "_assets/icons/showBalanceIcon.svg";
import { useStyle } from "./ShowBalanceButton.style";

interface ShowBalanceButtonProps {
  showBalance: boolean;
  onClick: VoidFunction;
}

export const ShowBalanceButton: React.FC<ShowBalanceButtonProps> = ({
  showBalance,
  onClick,
}: ShowBalanceButtonProps) => {
  const style = useStyle();

  return (
    <Button
      className={style.showBalanceButton}
      variant="outlined"
      color="secondary"
      onClick={onClick}
    >
      <img src={showBalanceIcon} alt="Visibilidade" />
      {showBalance ? "Esconder" : "Mostrar"} <br /> saldo
    </Button>
  );
};

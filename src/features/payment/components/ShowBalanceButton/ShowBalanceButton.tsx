import React from "react";
import { Button } from "@material-ui/core";
import ShowBalanceIconSecondary from "_assets/icons/showBalanceIcon-secondary.svg";
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
      onClick={onClick}
    >
      <img src={ShowBalanceIconSecondary} alt="Visibilidade" />
      {showBalance ? "Esconder" : "Mostrar"} <br /> saldo
    </Button>
  );
};

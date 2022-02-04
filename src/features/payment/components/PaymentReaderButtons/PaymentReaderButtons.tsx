import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useStyle } from "./PaymentReaderButtons.style";

interface PaymentReaderButtonsProps {
  icon: string;
  title: string;
  subtitle: string;
  onClick: VoidFunction;
}

export const PaymentReaderButtons: React.FC<PaymentReaderButtonsProps> = ({
  title,
  subtitle,
  icon,
  onClick,
}) => {
  const style = useStyle();

  return (
    <Button className={style.button} onClick={onClick}>
      <img src={icon} className={style.icon} alt={title} />
      <Typography className={style.label}>
        {title}
        <br></br>
        {subtitle}
      </Typography>
    </Button>
  );
};

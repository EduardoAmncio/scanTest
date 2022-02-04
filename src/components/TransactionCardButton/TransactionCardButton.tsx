import React from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "./TransactionCardButton.style";
interface TransactionCardButtonProps {
  icon: string;
  iconAlt?: string;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const TransactionCardButton: React.FC<TransactionCardButtonProps> = ({
  icon,
  iconAlt,
  className,
  disabled,
  onClick,
  children,
}) => {
  const styles = useStyles();

  return (
    <Button
      variant="contained"
      disabled={disabled}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      <Box className={styles.icon}>
        <img src={icon} alt={iconAlt} />
      </Box>
      {children}
    </Button>
  );
};

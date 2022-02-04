import React from "react";
import { Button as MuiButton } from "@material-ui/core";
import { ButtonStylesProps, useStyles } from "./Button.style";

interface ButtonProps extends ButtonStylesProps {
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  startIcon,
  endIcon,
  fullWidth,
  onClick,
  size,
  variant = "contained",
  palette = "primary",
  children,
}) => {
  const styles = useStyles({ size, palette, variant });

  return (
    <MuiButton
      variant={variant}
      color={palette}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      className={styles.button}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {children}
    </MuiButton>
  );
};

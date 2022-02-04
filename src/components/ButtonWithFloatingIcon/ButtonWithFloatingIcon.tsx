import React from "react";
import { Box, Button } from "@material-ui/core";
import { useStyles } from "./ButtonWIthFloatingIcon.style";

interface ButtonWithFloatingIconProps {
  icon?: string;
  iconAlt?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ButtonWithFloatingIcon: React.FC<ButtonWithFloatingIconProps> = ({
  icon,
  iconAlt,
  size = "medium",
  className,
  disabled,
  onClick,
  children,
}) => {
  const styles = useStyles({ size });

  return (
    <Button
      variant="contained"
      disabled={disabled}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      size={size}
    >
      <Box className={styles.icon}>
        {icon && <img src={icon} alt={iconAlt} />}
      </Box>
      {children}
    </Button>
  );
};

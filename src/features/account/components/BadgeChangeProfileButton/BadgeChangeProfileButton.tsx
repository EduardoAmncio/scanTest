import React from "react";
import { useStyle } from "./BadgeChangeProfileButton.style";
import { Button } from "@material-ui/core";

interface BadgeChangeProfileButtonProps {
  imagePath: string;
  title: string;
  //  onClick?:(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const BadgeChangeProfileButton: React.FC<BadgeChangeProfileButtonProps> =
  ({ title, imagePath }: BadgeChangeProfileButtonProps) => {
    const style = useStyle();

    return (
      <Button
        className={style.bgEditButton}
        variant="outlined"
        color="primary"
      >
        <div className={style.propButton}>
          <img src={imagePath} className={style.iconBgButton} alt="bgButton" />
          <div className={style.label}>{title}</div>
        </div>
      </Button>
    );
  };

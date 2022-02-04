import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useStyles } from "./ShowMoreButton.style";
import arrowShowMore from "_assets/icons/arrow-up.svg";
import arrowShowLess from "_assets/icons/arrow-down.svg";

interface ShowMoreButtonProps {
  showMore: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

enum ShowMoreLabel {
  SHOW_MORE = "Mostrar mais",
  SHOW_LESS = "Mostrar menos",
}

export const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  showMore,
  onClick,
}) => {
  const styles = useStyles();

  const [label, setLabel] = useState<ShowMoreLabel>(ShowMoreLabel.SHOW_MORE);

  useEffect(() => {
    showMore
      ? setLabel(ShowMoreLabel.SHOW_LESS)
      : setLabel(ShowMoreLabel.SHOW_MORE);
  }, [showMore]);

  return (
    <Button className={styles.componentShowMore} onClick={onClick}>
      <img src={showMore ? arrowShowLess : arrowShowMore} alt="ShowMore" />
      <text className={styles.label}>{label}</text>
    </Button>
  );
};

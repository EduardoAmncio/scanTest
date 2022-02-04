import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { useStyles } from "./SelectionCard.style";

interface SelectionCardProps {
  title: string;
  subtitle?: React.ReactNode | string;
  subsubtitle?: React.ReactNode | string;
  endIcon?: React.ReactNode | string;
  onClick?: VoidFunction;
}

export const SelectionCard = ({
  title,
  subtitle,
  subsubtitle,
  endIcon,
  onClick,
}: SelectionCardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} elevation={0} onClick={onClick}>
      <Box display="flex" flexDirection="column" className={styles.text}>
        <Typography variant="subtitle1" className={styles.title}>
          <strong>{title}</strong>
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          {subtitle}
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          {subsubtitle}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        {typeof endIcon === "string" ? (
          <img src={endIcon} alt={title + " icon"} className={styles.endIcon} />
        ) : (
          endIcon
        )}
      </Box>
    </Card>
  );
};

import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./ProcessDescriptionHeader.style";

interface TitleAndDescritionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export const ProcessDescriptionHeader = ({
  title,
  subtitle,
  description,
}: TitleAndDescritionProps) => {
  const styles = useStyles();

  return (
    <Box>
      <Typography id="pd-title" variant="h6" className={styles.title}>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          id="pd-subtitle"
          variant="subtitle1"
          className={styles.subtitle}
        >
          <strong>{subtitle}</strong>
        </Typography>
      )}
      {description && (
        <Typography
          id="pd-description"
          variant="body1"
          className={styles.description}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};
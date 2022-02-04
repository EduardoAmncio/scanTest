import { Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "./LandscapeContainer.style";

export const LandscapeContainner: React.FC = ({children}) => {

  const styles = useStyles();

  return (
    <Box className={styles.containner}>
      {children}
    </Box>
  );
};
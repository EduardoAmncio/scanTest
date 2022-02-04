import React from "react";
import { useStyles } from "./CardData.style";
import { Box, Card } from "@material-ui/core";

interface CardUserProps {
  fullName?: string;
  flagCard?: string;
  panLastDigits?: number;
}

export const CardData: React.FC<CardUserProps> = ({
  fullName,
  flagCard,
  panLastDigits,
}) => {
  const styles = useStyles();
  return (
    <Box className={styles.containerCard}>
      <Card className={styles.card}>
        <Box className={styles.cardContent}>
          <Box className={styles.headerCardText}>
            Cartão de crédito pré-pago
          </Box>
          <Box className={styles.contentNumberCard}>
            <Box className={styles.numberCard}>
              xxxx.xxxx.xxxx.{panLastDigits}
            </Box>
            <Box className={styles.contentFlag}>
              <img src={flagCard} className={styles.flagStyle} alt="FlagCard" />
              <Box className={styles.prepagText}>pré-pago</Box>
            </Box>
          </Box>
          <Box className={styles.nameCard}>{fullName}</Box>
        </Box>
      </Card>
    </Box>
  );
};

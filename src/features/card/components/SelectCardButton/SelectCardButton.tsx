import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./SelectCardButton.style";
import excludeIcon from "_assets/icons/ExcludeIconCard.svg";
import { Card } from "features/card/redux/models/card";

interface SelectButtonCardsProps {
  card?: Card;
  flagCard?: string;
  blocked?: boolean;
  flagtype: string;
  onClick?: (card: Card) => void;
}

export const SelectCardButton: React.FC<SelectButtonCardsProps> = ({
  card,
  flagCard,
  blocked = card?.isBlocked,
  flagtype,
  onClick,
}) => {
  const styles = useStyles({ blocked, flagtype });
  return (
    <List className={styles.list}>
      <Box
        onClick={() => {
          if (onClick) onClick(card!);
        }}
      >
        <ListItem button divider className={styles.listItem}>
          <ListItemText
            primary={
              <Box className={styles.containerSpan}>
                <Box className={styles.blockStyle}>
                  <img
                    src={excludeIcon}
                    className={styles.imgBlock}
                    alt="isBlocked"
                  />
                </Box>
                <Typography className={styles.spanText}>
                  Cartão de crédito pré-pago
                </Typography>
                <Typography className={styles.infoCard}>
                  {flagtype} - Final {card!.panLastDigits}
                </Typography>
              </Box>
            }
            secondary={
              <Typography className={styles.fullName}>
                {card!.fullName}
              </Typography>
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" className={styles.contentFlag}>
              <Box className={styles.containerFlag}>
                <img
                  src={flagCard}
                  className={styles.flagCard}
                  alt="FlagCard"
                />
                <Typography className={styles.prepagText}>pré-pago</Typography>
              </Box>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </Box>
    </List>
  );
};

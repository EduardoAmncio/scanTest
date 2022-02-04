import React from "react";
import { Button } from "@material-ui/core";

import { useStyles } from "./AttachmentCard.style";

interface AttachmentCardProps {
  image: string;
  title: string;
  info: string;
}

export const AttachmentCard: React.FC<AttachmentCardProps> = ({
  title,
  image,
  info,
}: AttachmentCardProps) => {
  const styles = useStyles();

  return (
    <Button
      className={styles.attatchmentButton}
      variant="outlined"
      color="primary"
      fullWidth
    >
      <div className={styles.propButton}>
        <div className={styles.attatchmentInfoLabel}>
          <strong> {title} </strong> <br />
          <div className={styles.attachmentDetailInfo}>{info}</div>
        </div>
        <div className={styles.attachmentButtonIcon}>
          <img src={image} alt={`${title} attachmnent card`} />
        </div>
      </div>
    </Button>
  );
};
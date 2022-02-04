import React from "react";
import { useStyles } from "./TagChip.style";
import { Chip } from "@material-ui/core";

interface TagChipProps {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: VoidFunction;
}

export const TagChip: React.FC<TagChipProps> = ({
  label,
  selected,
  disabled,
  onClick,
}) => {
  const styles = useStyles();
  return (
    <Chip
      className={styles.root}
      label={label}
      disabled={disabled}
      onClick={onClick}
      variant="outlined"
    />
  );
};

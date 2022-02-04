import React from "react";
import { dateLabel } from "constants/buttons/labels";
import { DatePicker } from "@material-ui/pickers";
import Schedule from "_assets/icons/Schedule.svg";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";

interface DateButtonProps {
  open?: boolean;
  value: Date | null;
  maxDate: Date;
  onClick?: VoidFunction;
  onDateSelection?: (date: Date | null) => void;
  onClose?: VoidFunction;
}

export const DateButton: React.FC<DateButtonProps> = ({
  open,
  value,
  maxDate,
  onClick,
  onDateSelection,
  onClose,
}) => {
  return (
    <React.Fragment>
      <ButtonWithFloatingIcon icon={Schedule} onClick={onClick}>
        {dateLabel}
      </ButtonWithFloatingIcon>
      {open && (
        <DatePicker
          value={value}
          maxDate={maxDate}
          open={true}
          onAccept={onDateSelection}
          onChange={() => {}}
          onClose={onClose}
        />
      )}
    </React.Fragment>
  );
};

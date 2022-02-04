import React from "react";
import { ButtonWithFloatingIcon } from "components/ButtonWithFloatingIcon";
import { scheduleLabel } from "constants/buttons/labels";
import { DatePicker } from "@material-ui/pickers";
import Schedule from "_assets/icons/Schedule.svg";

interface SchedulingButtonProps {
  open?: boolean;
  value: Date | null;
  minDate: Date;
  onClick?: VoidFunction;
  onDateSelection?: (date: Date | null) => void;
  onClose?: VoidFunction;
}

export const SchedulingButton: React.FC<SchedulingButtonProps> = ({
  open,
  value,
  minDate,
  onClick,
  onDateSelection,
  onClose,
}) => {
  return (
    <React.Fragment>
      <ButtonWithFloatingIcon icon={Schedule} onClick={onClick}>
        {scheduleLabel}
      </ButtonWithFloatingIcon>
      {open && (
        <DatePicker
          value={value}
          minDate={minDate}
          open={true}
          onAccept={onDateSelection}
          onChange={() => { }}
          onClose={onClose}
        />
      )}
    </React.Fragment>
  );
};

import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { useStyles } from "components/DateInput/DateInput.style";

interface DateInputProps {
  value?: string | MaterialUiPickersDate;
  onChange: (date: MaterialUiPickersDate) => void;
  label?: string;
}

export const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  label,
}) => {
  const styles = useStyles({ showDate: false });

  return (
    <KeyboardDatePicker
      className={styles.wrapper}
      label={label}
      helperText={""}
      format="dd/MM/yyyy"
      value={value}
      onChange={onChange}
      KeyboardButtonProps={{
        "aria-label": "change date",
      }}
    />
  );
};

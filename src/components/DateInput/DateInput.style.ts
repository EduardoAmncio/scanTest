import { makeStyles } from "@material-ui/core";
import { colors, theme } from "_config/theme";

export interface DateInputProps {
  showDate?: boolean;
}

export const useStyles = makeStyles({
  wrapper: {
    border: "none",
    padding: 0,
    width: "100%",
    "& .MuiInputBase-input": {
      textAlign: "center",
      marginLeft: 45,
    },
    "& .MuiFormLabel-root": {
      color: colors.system.light.primary,
      fontWeight: 500,
    },
  },

  input: {
    backgroundColor: colors.system.light.surface,
    border: `1px solid ${colors.system.light.outline}`,
    borderRadius: 4,
    color: ({ showDate }: DateInputProps) =>
      showDate ? colors.source.neutral : "transparent",
    fontFamily: theme.typography.fontFamily,
    fontSize: 12,
    height: 25,
    outline: "none",
    width: 105,

    "&::-webkit-calendar-picker-indicator": {
      position: "absolute",
      margin: 0,
      left: 4,
      height: 16,
      width: 16,
      backgroundImage: "none",
    },

    "&::-webkit-datetime-edit": {
      marginLeft: 22,
    },
  },

  icon: {
    position: "absolute",
    marginTop: 3,
    marginLeft: 4,
  },
});

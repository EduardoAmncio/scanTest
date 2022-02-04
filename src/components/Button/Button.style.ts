import { makeStyles, Theme } from "@material-ui/core";
import { colors, theme } from "_config/theme";

export interface ButtonStylesProps {
  variant?: "outlined" | "contained" | "text";
  size?: "small" | "medium" | "large";
  palette?: "primary" | "secondary";
}

export const useStyles = makeStyles<Theme, ButtonStylesProps, "button">({
  button: {
    height: 36,
    fontSize: 12,
    borderRadius: 4,

    "& .MuiButton-label": {
      textTransform: "none",
      textAlign: "center",
    },
    "&.MuiButton-sizeSmall": {
      fontSize: 10,
      height: 26,
    },
    "& .MuiButton-iconSizeSmall": {
      "& > *:first-child, & > *:last-child": {
        fontSize: 14,
      },
    },
    "&.MuiButton-sizeLarge": {
      minWidth: 120,
      fontSize: 12,
      height: 40,
    },
    "&:hover": {
      backgroundColor: colors.readOnly.light.surface5,
    },
  },
});

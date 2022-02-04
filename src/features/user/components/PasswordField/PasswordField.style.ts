import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  otp: {
    "& div:not(:last-of-type)": {
      marginRight: 12,
    },
    "& div": {
      flex: 1,
      display: "flex",
    },
    "& input": {
      flex: 1,
      height: 60,
      fontSize: 16,
      backgroundColor: colors.readOnly.light.white,
      color: colors.system.light.primary,
      border: `1.5px solid ${colors.system.light.outline}`,
      borderRadius: 4,
      outline: "none",

      "&:focus": {
        borderColor: colors.system.light.primary,
      },
    },
  },
});

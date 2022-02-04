import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  value: {
    fontSize: 24,
    fontWeight: 700,
    color: colors.source.neutral,
  },
  box: {
    "& .MuiTypography-root": {
      textAlign: "center",
      color: colors.source.neutral,
    },
  },
  valueSection: {
    marginTop: 24,
  },
});

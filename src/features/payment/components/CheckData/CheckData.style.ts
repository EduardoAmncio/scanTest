import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  receiver: {
    fontWeight: 700,
    fontSize: "12px",
    color: colors.source.neutral,
  },
  value: {
    fontWeight: 700,
    fontSize: "14px",
    color: colors.source.neutral,
  },
  checkOut: {
    marginTop: "16px",
  },
});

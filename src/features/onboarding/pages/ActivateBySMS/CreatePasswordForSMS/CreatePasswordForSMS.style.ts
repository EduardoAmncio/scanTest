import { makeStyles } from "@material-ui/core";
import { theme, colors } from "_config/theme";

export const useStyles = makeStyles({
  input: {
    marginTop: theme.spacing(),
  },
  description: {
    color: colors.source.neutral,
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "15.6px",
  },
});

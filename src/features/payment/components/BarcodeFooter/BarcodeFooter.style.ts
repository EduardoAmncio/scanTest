import { alpha, makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "90px",
    height: "100vh",
    backgroundColor: colors.system.light.onTertiary,
  },
});

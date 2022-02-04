import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  EnterCodeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    background: colors.system.light.surface,

    minWidth: "30px",
    minHeight: "130px",
    padding: "5px 0 5px 0",
    marginLeft: "30px",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "9px",
    lineHeight: "11px",
    border: `0.5px solid  ${colors.system.light.background}`,
    borderRadius: "4px",
    color: colors.system.light.onSurface,
  },
});

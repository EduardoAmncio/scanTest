import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    marginRight: "-1px",
    width: "20%",
    minWidth: "80px",
    height: "100vh",
    background: colors.system.light.onSurface,
    alignItems: "left",
  },

  optionBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
  },

  menuName: {
    display: "flex",
    marginTop: "15px",
    color: colors.readOnly.light.white,
    fontWeight: 500,
  },

  text: {
    marginTop: "25px",
    color: colors.readOnly.light.white,
  },

  buttonClose: {
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",
    padding: "5px 3px",
    background: colors.system.light.surface,
    marginBottom: "10px",
  },
});

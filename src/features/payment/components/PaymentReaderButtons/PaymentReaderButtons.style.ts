import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyle = makeStyles({
  button: {
    display: "flex",
    justifyContent: "center",
    padding: "8px",
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  icon: {
    height: "30px",
  },
  label: {
    fontSize: "80%",
    color: colors.system.light.primary,
    textTransform: "none",
    marginLeft: 8,
  },
});

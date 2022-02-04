import { alpha, makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  drawer: {
    "& .MuiDrawer-paper": {
      background: "transparent",
    },
  },
  content: {
    padding: 16,
    backgroundColor: colors.system.light.onSurface,
    color: colors.readOnly.light.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: "relative",
    marginTop: 12,
    minHeight: 212,
  },
  closeButton: {
    position: "absolute",
    right: 16,
    top: -12,
  },
  inputRow: {
    '& div[class="input"]:not(:last-of-type)': {
      marginRight: 12,
    },
    '& div[class="input"]': {
      flex: 1,
      display: "flex",
      "& input": {
        flex: 1,
        height: 72,
        fontSize: 24,
        backgroundColor: alpha(colors.readOnly.light.white, 0.4),
        color: colors.readOnly.light.white,
        outline: "none",
        border: "none",
        borderRadius: 4,
      },
    },
  },
  buttonsRow: {
    marginBottom: 24,
  },
  subtitle: {
    opacity: 0.9,
  },
});

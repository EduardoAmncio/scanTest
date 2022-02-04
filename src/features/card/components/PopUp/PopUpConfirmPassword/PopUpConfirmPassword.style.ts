import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  drawer: {
    "& .MuiDrawer-paper": {
      background: "transparent",
    },
  },
  content: {
    padding: 16,
    paddingLeft: 30,
    backgroundColor: colors.system.light.primary,
    color: "white",
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
    '& div[class="teste"]:not(:last-of-type)': {
      marginRight: 12,
    },
    '& div[class="teste"]': {
      flex: 1,
      display: "flex",
      "& input": {
        minWidth: 45,
        height: 55,
        fontSize: 24,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        color: "white",
        outline: "none",
        border: "none",
        borderRadius: 4,
      },
    },
  },
  confirm: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  passowordtext: {
    marginLeft: 10,
  },
});

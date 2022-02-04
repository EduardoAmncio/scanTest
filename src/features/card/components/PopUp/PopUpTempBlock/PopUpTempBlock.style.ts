import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyle = makeStyles({
  containerPopUp: {
    width: "100%",
    height: 212,
    backgroundColor: "#E8E8E8",
    position: "absolute",
    padding: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    boxShadow: "0px -2px 8px rgba(0, 0, 0, 0.2)",
  },
  boxbtnclose: {
    position: "absolute",
    right: 15,
    marginTop: "-15px",
  },
  containerText: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 39,
  },
  confirm: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.system.light.onBackground,
    fontSize: 16,
    marginTop: 10,
  },
  textBlock: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "16.41px",
    color: colors.system.light.onBackground,
    width: 190,
    transform: "scale(0.973683,0.974619)",
  },
  subtextBlock: {
    marginTop: 14,
    fontSize: 12,
    lineHeight: "14.06px",
    color: colors.source.neutral,
    width: 268,
    fontWeight: 300,
    transform: "scale(0.979524, 1.030807)",
  },
  contentbutton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  drawer: {
    "& .MuiDrawer-paper": {
      background: "transparent",
      boxShadow: "none",
    },
  },
  content: {
    padding: 16,
    backgroundColor: colors.system.light.background,
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
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: -10,
    '& div[class="input"]:not(:last-of-type)': {
      marginRight: 10,
    },
    '& div[class="input"]': {
      flex: 1,
      display: "flex",
      "& input": {
        display: "flex",
        minWidth: 45,
        height: 55,
        fontSize: 24,
        backgroundColor: colors.system.light.background,
        color: colors.system.light.onBackground,
        outline: "1px",
        border: `1px solid ${colors.system.light.outline}`,
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

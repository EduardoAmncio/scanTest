import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  labelPassword: {
    marginLeft: "0px",
    color: colors.source.neutral,
    fontWeight: 500,
  },
  passwordInput: {
    color: colors.source.neutral,
    fontSize: 14,
    lineHeight: 2,

    "& input": {
      marginRight: 4,
      marginLeft: 4,
      fontSize: 40,
      border: "0.8px solid #c4c4c4",
      boxSizing: "border-box",
      borderRadius: 3,
      width: "41.95px",
      height: 51,
    },
  },

  inputInvalid: {
    fontSize: 17,
    lineHeight: 2,
    color: colors.system.light.error,
    alignItems: "center",
    "& input": {
      display: "flex",
      justifyContent: "center",
      marginRight: 4,
      marginLeft: 4,
      fontSize: 40,
      border: "2px solid red",
      borderRadius: 3,
      width: "41.95px",
      height: 51,
    },
  },
  centerOtpInput: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
});

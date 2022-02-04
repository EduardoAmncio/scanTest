import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  alert: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
  },
  errorMensage: {
    marginTop: 40,
    fontWeight: 500,
    fontSize: "14px",
    textAlign: "center",
    color: colors.source.neutral,
  },
  inconsistent: {
    marginTop: 15,
    fontWeight: 500,
    size: "14px",
    lineHeight: "130%",
    textAlign: "center",
    color: colors.source.neutral,
    LineHeight: "18,2px",
  },
  textDescription: {
    marginTop: 60,
    height: "48px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontSize: "12px",
    color: colors.source.neutral,
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    width: 200,
    height: 48,
  },
  button: {
    marginTop: 80,
    textAlign: "center",
    "& button": {
      width: "152px",
      height: "38px",
      borderRadius: "5px",
      boxShadow: "none",
    },
  },
});

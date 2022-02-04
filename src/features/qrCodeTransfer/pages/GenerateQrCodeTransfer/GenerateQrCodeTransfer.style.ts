import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-70px",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.source.neutral,
  },
  input: {
    width: "100%",
    border: "none",
    fontWeight: 700,
    fontSize: 24,
    textAlign: "center",
    color: colors.source.neutral,
    backgroundColor: colors.source.primary,

    "&:focus": {
      outline: "none",
      backgroundColor: colors.source.primary,
    },
  },
  content: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
  },
  error: {
    color: colors.system.light.error,
    fontWeight: 700,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Roboto",
  },
});

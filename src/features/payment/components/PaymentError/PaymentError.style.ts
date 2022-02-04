import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  errorPayment: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 0 8px 0",
    minWidth: "30px",

    background: "#FF3D00",
    borderRadius: "18px",
    marginRight: "-15px",
  },
  fontPayment: {
    lineHeight: "250%",
    fontSize: "12px",
    color: colors.readOnly.light.white,
  },
});

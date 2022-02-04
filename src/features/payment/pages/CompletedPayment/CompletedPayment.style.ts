import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  formFooterPayments: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "fixed",
    bottom: "16px",
    left: "16px",
    right: "16px",
  },
  completeTitle: {
    backgroundColor: colors.system.light.surface,
    width: "100%",
    marginTop: "25px",
    padding: "20px",
  },
  completedImagem: {
    width: "100%",
    marginTop: "5px",
    marginBottom: "5px",
    padding: "20px",
  },
  mainWrapper: {
    position: "absolute",
    margin: -16,
    height: "92%",
    width: "100%",
    backgroundColor: colors.system.light.surface,
  },
});

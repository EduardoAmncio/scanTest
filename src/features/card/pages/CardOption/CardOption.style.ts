import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  descriptionBoxText: {
    width: 260,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    marginLeft: 20,
    alignItems: "center",
  },
  listButtons: {
    marginTop: "20px",
  },
  description: {
    color: colors.source.neutral,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "130%",
  },
});

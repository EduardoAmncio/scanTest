import { alpha, makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  attatchmentButton: {
    width: "100%",
    maxWidth: 136,
    height: 48,
    backgroundColor: colors.system.light.surface,
    boxShadow: `0px 2px 2px ${alpha(colors.readOnly.light.black, 0.25)}`,
    borderColor: colors.system.light.outline,
  },
  propButton: {
    fontSize: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  attachmentButtonIcon: {
    display: "absolute",
    width: 10,
    marginRight: 15,
    marginTop: 5,
  },
  attatchmentInfoLabel: {
    textTransform: "capitalize",
    fontSize: 12,
    color: colors.source.neutral,
    marginRight: 30,
    width: 15,
    paddingRight: 50,
    marginLeft: -5,
  },
  attachmentDetailInfo: {
    marginRight: 35,
    fontWeight: 300,
  },
});

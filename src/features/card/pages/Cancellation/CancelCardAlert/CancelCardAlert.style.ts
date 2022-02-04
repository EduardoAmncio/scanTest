import { makeStyles } from "@material-ui/core";
import { colors } from "_config/theme";

export const useStyles = makeStyles({
  desc: {
    height: 176,
  },
  imageReference: {
    position: "relative",
  },
  image: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    top: "-25px",
  },
  palavra: {
    fontSize: 18,
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
  textData: {
    textAlign: "center",
    display: "block",
  },
  textSpanData: {
    textAlign: "center",
    display: "block",
  },
  palavra2: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
    width: 287,
  },
  textAttempt: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    color: colors.source.neutral,
  },
  textDataContent: {
    fontSize: 14,
    textAlign: "center",
    marginTop: "10px",
    color: colors.source.neutral,
  },
});

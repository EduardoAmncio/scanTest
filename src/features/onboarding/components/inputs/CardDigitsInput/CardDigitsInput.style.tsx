import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  cardLabelPanLastDigits: {
    display: "flex",
    fontSize: 12,
    flexDirection: "column",
    color: "#555555",
    marginRight: 10,
    marginLeft: 4,
  },
  boxPanLastDigits: {
    display: "flex",
    justifyContent: "center",
    color: "#C4C4C4",
    border: 1,
    boxSizing: "border-box",
    borderRadius: 3,
  },
  panLastDigitsInput: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "& input": {
      marginRight: 20,
      marginLeft: 4,
      fontSize: 40,
      border: "0.8px solid #c4c4c4",
      boxSizing: "border-box",
      borderRadius: 3,
      width: "41.95px",
      height: 51,
    },
  },
});

import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  cardTokenContext: {
    marginTop: 20,
  },
  cardLabelToken: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginRight: 250,
    fontWeight: "bold",
  },
  description: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    color: "#555",
  },
  boxToken: {
    display: "flex",
    justifyContent: "center",
    color: "#C4C4C4",
    border: 1,
    boxSizing: "border-box",
    borderRadius: 3,
  },
  tokenInput: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    "& input": {
      marginRight: 5,
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

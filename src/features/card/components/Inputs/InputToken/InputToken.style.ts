import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  box: {
    marginTop: 20,
  },
  description: {
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 12,
    color: "#555",
  },
  boxToken: {
    display: "flex",
    marginRight: 7.46,
    justifyContent: "center",
  },
  tokeninput: {
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
});

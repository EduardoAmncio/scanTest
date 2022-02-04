import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  description: {
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
    height: "100%",
    minheight: "250px",
    display: "flex",
    flexdirection: "column",
    fontSize: "12px",
    marginTop: "20px",
  },
  bottom: {
    paddingLeft: "15px",
    paddingBottom: "15px",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: "10px",
  },
  background: {
    height: "72px",
    padding: "15px 15px 0px 15px",
    backgroundColor: "#F9F9F9",
    display: "flex",
    flexDirection: "column",
  },
  separator: {
    listStyle: "none",
    padding: 0,
    fontSize: "0.75rem",
    width: "100%",
    borderBottom: "1.5px solid #F2F2F2",
    marginBottom: "11px",
  },
  buttons: {
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

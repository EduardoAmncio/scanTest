import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  buttonOption: {
    width: "100%",
    borderRadius: 0,
    padding: 0,
    height: "80px",
    "& .MuiButton-label": {
      height: "80px",
      fontFamily: "Roboto",
    },
    boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.24)",
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 13,
    fontFamily: "Roboto",
    lineHeight: "15.23px",
    color: "#555555",
    "& + #pd-description": {
      marginTop: 8,
    },
    margin: "0 0 3px 0",
  },
  description: {
    color: "#555555",
    fontWeight: 300,
    fontSize: 12,
    height: "27px",
    fontFamily: "Roboto",
    lineHeight: "14.06px",
    textAlign: "left",
    letterSpacing: 0,
    paddingTop: "4px"
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "15px 26px 16px 26px",
    alignItems: "center",
    paddingRight: "10px",
  },
  labelContainer: {
    textTransform: "none",
    textAlign: "left",
    width: "72.766%",
  },
  phoneNumber: {
    fontWeight: 400,
    fontSize: 12,
    color: "#555555",
    marginTop: "-11px"
  },
});

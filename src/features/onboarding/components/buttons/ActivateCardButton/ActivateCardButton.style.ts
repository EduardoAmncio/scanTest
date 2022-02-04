import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  activateCardButton: {
    width: "152px",
    marginTop: 10,
    maxWidth: "160px",
    height: 38,
    fontSize: "12px",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#323751",
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
    "& .MuiButton-label": {
      textTransform: "none",
      textAlign: "center",
    },
  },
});

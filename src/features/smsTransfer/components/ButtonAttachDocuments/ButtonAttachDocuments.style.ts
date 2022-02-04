import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({

  ButtonAttachDocuments: {
    width: "100%",
    height: "55px",
    background: "#F8F8F8",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    marginBottom: "9px",

  },
  contentAttachDocuments:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

  },
  iconAttachDocuments:{
    width: "27px",
    height: "32px",
    margin: "0 30px",

  },
  labelAttachDocuments:{
    color: "Var(--gray-dark)",
    fontSize: "12px",
    textTransform: "none",
  },
});
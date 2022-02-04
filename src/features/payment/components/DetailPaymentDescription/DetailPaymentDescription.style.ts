import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  detailPayment: {
    width: "100%",
    color: "#555555",
  },

  detailPaymentContent: {
    fontSize: "1rem",
  },

  paymentDetail: {
    fontWeight: "bold",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    marginBottom: "17px",
    marginRight: "25px",
    lineHeight: "110%",
  },

  paymentDetailDate: {
    fontWeight: "bold",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    marginRight: "25px",
    lineHeight: "110%",
  },

  capitalized: {
    fontWeight: "bold",
    fontSize: "16px",
    textTransform: "capitalize",
    marginBottom: "17px",
  },
});

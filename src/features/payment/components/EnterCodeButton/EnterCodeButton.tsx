import React from "react";
import { Link } from "@material-ui/core";
import { useStyles } from "./EnterCodeButton.style";
import { useHistory } from "react-router";
import { PaymentRoutes } from "features/payment/constants/routes";

export const EnterCodeButton: React.FC = () => {
  const styles = useStyles();
  const history = useHistory();

  const readCode = () => {
    history.push(PaymentRoutes.barCodePayment);
  };

  return (
    <Link className={styles.EnterCodeButton} color="primary" onClick={readCode}>
      Digitar o codigo manualmente
    </Link>
  );
};

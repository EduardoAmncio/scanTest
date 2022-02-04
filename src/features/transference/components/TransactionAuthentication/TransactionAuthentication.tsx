import React from "react";
import { useStyles } from "./TransactionAuthentication.style";

interface TransactionAuthenticationProps {
  payment: string;
  controlProtocol: string;
  internalProtocol: string;
}

export const TransactionAuthentication: React.FC<TransactionAuthenticationProps> =
  ({ payment, controlProtocol, internalProtocol }) => {
    const styleAuthentication = useStyles();

    return (
      <div className={styleAuthentication.autenticationContent}>
        <div> Autenticação </div>
        <div>
          Pago via:
          <strong> {payment} </strong>
        </div>
        <div> Controle/Protocolo: {controlProtocol} </div>
        <div> Protocolo Interno: {internalProtocol} </div>
      </div>
    );
  };

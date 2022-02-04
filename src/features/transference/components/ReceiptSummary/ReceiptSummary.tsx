import React from "react";
import { ConfigContext } from "_config";

import { useStyles } from "./ReceiptSummary.style";

interface ReceiptSummaryProps {
  value: string;
  account: string;
  taxId: string;
  data: string;
  description: string;
}

export const ReceiptSummary: React.FC<ReceiptSummaryProps> = ({
  value,
  account,
  taxId,
  data,
  description,
}) => {
  const { company } = React.useContext(ConfigContext);
  const styles = useStyles();

  return (
    <div className={styles.voucherContent}>
      <div> Transferência no valor de </div>
      <strong> R$ {value} </strong>
      <div> para a conta {company.name} de </div>
      <strong> {account} </strong>
      <div> com CPF </div>
      <strong> {taxId} </strong>
      <div> no dia </div>
      <strong> {data} </strong>
      <div> descrição da transferência </div>
      <strong> {description} </strong>
    </div>
  );
};

import React from "react";

import { useStyles } from "./ReceiptSummary.style";

interface ReceiptSummaryProps {
  value: string;
  name: string;
  number: string;
  date: string;
  description: string;
}

export const ReceiptSummary: React.FC<ReceiptSummaryProps> = ({
  value,
  name,
  number,
  date,
  description,
}: ReceiptSummaryProps) => {
  const styles = useStyles();
  return (
    <div className={styles.voucherContent}>
      <div> Transferência no valor de </div>
      <strong> R$ {value} </strong>
      <div> para a </div>
      <strong> {name} </strong>
      <div> via SMS para o número </div>
      <strong> {number} </strong>
      <div> no dia </div>
      <strong> {date} </strong>
      <div> descrição da transferência </div>
      <strong> {description} </strong>
    </div>
  );
};

import React from "react";
import { CurrencyFormatter, ShortDateFormatter } from "_translate";
import { maskBarcode } from "_utils/masks/barCode";
import { useStyles } from "./ReceiptDescription.style";

interface VoucherDescriptionProps {
  paymentValue: number;
  receiverName: string;
  bank: string;
  paymentDate: Date;
  barcode: string;
}

export const ReceiptDescription: React.FC<VoucherDescriptionProps> = ({
  paymentValue,
  receiverName,
  bank,
  paymentDate,
  barcode,
}: VoucherDescriptionProps) => {
  const styles = useStyles();
  return (
    <div className={styles.voucherContent}>
      <div> Pagamento no valor de </div>
      <strong> {CurrencyFormatter.format(paymentValue)} </strong>
      <div> Recebedor </div>
      <strong> {receiverName} </strong>
      <div> Data </div>
      <strong> {ShortDateFormatter.format(paymentDate)} </strong>
      <div> Banco emissor </div>
      <strong> {bank} </strong>
      <div> Código de barras </div>
      <strong> {maskBarcode(barcode)} </strong>
    </div>
  );
};

import { CurrencyFormatter, DateFormatter, WeekdayFormatter } from "_translate";
import React, { ReactElement } from "react";
import { useStyles } from "./DetailPaymentDescription.style";

interface DetailPaymentDescriptionProps {
  paymentValue: number;
  receiverName: string;
  paymentDate: Date;
  description: string;
  bankName: string;
  tags?: ReactElement;
}

export const DetailPaymentDescription: React.FC<
  DetailPaymentDescriptionProps
> = ({
  paymentValue,
  receiverName,
  paymentDate,
  description,
  bankName,
  tags,
}) => {
  const styles = useStyles();
  return (
    <div className={styles.detailPaymentContent}>
      <div> Pagamento no valor de </div>
      <div className={styles.paymentDetail}>
        {CurrencyFormatter.format(paymentValue)}
      </div>
      <div> Recebedor </div>
      <div className={styles.paymentDetail}>{receiverName}</div>
      <div> no dia </div>
      <div className={styles.paymentDetailDate}>
        {DateFormatter.format(paymentDate)},&nbsp;
      </div>
      <div className={styles.capitalized}>
        {WeekdayFormatter.format(paymentDate).replace("-feira", "")}
      </div>
      <div> sua descrição foi </div>
      <div className={styles.paymentDetail}> {description} </div>
      <div> Banco Emissor </div>
      <div className={styles.paymentDetail}> {bankName} </div>
      <div> Anexos </div>
      <div className={styles.paymentDetail}> {} </div>
      <div>Suas Tags</div>
      <div className={styles.paymentDetail}> {tags} </div>
    </div>
  );
};

import React from "react";
import { useStyle } from "./DayTransactions.style";
import { Typography } from "@material-ui/core";
import { TranscationCard } from "features/account/components/TranscationCard";
import { DayTransactions as DayTransactionsModel } from "features/account/redux/models/dayTransactions";

import { CurrencyFormatter } from "_translate";

interface DayTransactionsProps {
  dayTransactions: DayTransactionsModel;
}

export const DayTransactions: React.FC<DayTransactionsProps> = ({
  dayTransactions,
}: DayTransactionsProps) => {
  const { day, month, transactions, balance } = dayTransactions;
  const style = useStyle();

  return (
    <section className={style.transactionsContent}>
      <div className={style.transactionDay}>
        <Typography className={style.transactionDate} variant="body2" gutterBottom>
          {day}
        </Typography>
        <Typography className={style.transactionDate} variant="body2" gutterBottom>
          {month}
        </Typography>
      </div>
      <div className={style.transactionsHistory}>
        <div className="transactions-itens">
          {transactions?.map((transaction, i) => (
            <TranscationCard key={i} transaction={transaction} />
          ))}
        </div>
        <div className={style.balanceCurrent}>
          <Typography
            className="balance"
            variant="caption"
            display="block"
            gutterBottom
          >
            Saldo do dia {CurrencyFormatter.format(balance)}
          </Typography>
        </div>
      </div>
    </section>
  );
};

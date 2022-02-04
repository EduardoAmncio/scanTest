import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { CurrencyFormatter } from "_translate";
import IncomeIcon from "_assets/icons/Enter.svg";
import ExpenditureIcon from "_assets/icons/Exit.svg";

import { useStyle } from "./YourFinancesCard.style";

interface YourFinancesCardProps {
  value?: number;
  income?: boolean;
}

export const YourFinancesCard: React.FC<YourFinancesCardProps> = ({
  value,
  income,
}) => {
  const style = useStyle();
  const formattedValue = value ? CurrencyFormatter.format(value) : "---";

  return (
    <Box className={style.wrapper}>
      <Box className={style.icon}>
        <img
          src={income ? IncomeIcon : ExpenditureIcon}
          alt={`${income ? "income" : "expenditure"} icon`}
        />
      </Box>
      <Card className={style.card}>
        <Typography variant="caption">
          Você <strong>{income ? "recebeu" : "gastou"}</strong>
        </Typography>
        <Typography variant="body2">
          <strong>{formattedValue}</strong>
        </Typography>
      </Card>
    </Box>
  );
};

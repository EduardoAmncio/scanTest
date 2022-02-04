import React from "react";
import { ConfigContext } from "_config";
import { CurrencyFormatter, DateFormatter } from "_translate";

interface DetailTransferDescriptionProps {
  value: number;
  accountName: string;
  date: Date;
  description: string;
  tags?: React.ReactNode;
}

export const DetailTransferDescription: React.FC<
  DetailTransferDescriptionProps
> = ({ value, accountName, date, description }) => {
  const { company } = React.useContext(ConfigContext);

  return (
    <div className="detailTransfer-content">
      <div> Transferência no valor de </div>
      <div className="transfer-detail">{CurrencyFormatter.format(value)}</div>
      <div> para a conta {company.name} de </div>
      <div className="transfer-detail"> {accountName} </div>
      <div> no dia </div>
      <div className="transfer-detail">{DateFormatter.format(date)}</div>
      <div> sua descrição foi </div>
      <div className="transfer-detail"> {description} </div>
    </div>
  );
};

import React from "react";
import { CurrencyFormatter, DateFormatter } from "_translate";
import "./DetailSmsTransferDescription.scss";

interface DetailSmsTransferDescriptionProps {
  value: number;
  name: string;
  number: string;
  date: Date;
}

export const DetailSmsTransferDescription: React.FC<DetailSmsTransferDescriptionProps> =
  ({ value, name, number, date }) => {
    return (
      <div className="detailTransfer-content">
        <div> Transferência no valor de </div>
        <div className="transfer-detail">{CurrencyFormatter.format(value)}</div>
        <div> para </div>
        <div className="transfer-detail"> {name} </div>
        <div> via SMS para o número </div>
        <div className="transfer-detail">{number}</div>
        <div> no dia </div>
        <div className="transfer-detail"> {DateFormatter.format(date)} </div>
        <div> Anexos </div>
      </div>
    );
  };

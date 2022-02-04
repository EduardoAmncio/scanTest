import { MoneyTransferStatus } from "./moneyTransferStatus";

export interface TransactionDetails {
  value: number;
  toName: string;
  toTaxId: string;
  date?: Date;
  description?: string;
  tags?: string[];
  externalIdentifier: string;
  status: MoneyTransferStatus;
}

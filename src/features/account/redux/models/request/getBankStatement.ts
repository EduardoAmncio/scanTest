import { TransactionType } from "../transactionType";
import { ApiRequest } from "_config/api";

export interface GetBankStatementRequest extends ApiRequest {
  taxId: string;
  bank?: string;
  bankBranch?: string;
  bankAccount?: string;
  bankAccountDigit?: string;
  accountId: number;
  startDate: Date;
  endDate: Date;
  transactionType?: TransactionType;
  tags?: string[];
}

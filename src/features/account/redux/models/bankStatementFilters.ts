import { TransactionType } from "./transactionType";

export interface BankStatementFilters {
  startDate?: Date;
  endDate?: Date;
  transactionType?: TransactionType;
  tags?: string[];
}

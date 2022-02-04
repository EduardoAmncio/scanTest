export interface Account {
  accountId: number;
  name: string;
  taxId: string;
  companyId: number;
  status: AccountStatus;
  bank: string;
  bankBranch: string;
  bankAccount: string;
  bankAccountDigit: string;
  spbBank: string;
  spbBankBranch: string;
  spbBankAccount: string;
  spbBankAccountDigit: string;
}

export enum AccountStatus {
  disabled,
  enabled,
}

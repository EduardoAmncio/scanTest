import { ApiRequest } from "_config/api";
export interface CreateMoneyTransferRequest extends ApiRequest {
  accountId: number;
  transferValue: number;
  transferDate: Date;
  description?: string;
  tags?: string[];
  toTaxId: string;
  toName: string;
  toBank: string;
  toBankBranch: string;
  toBankAccount: string;
  toBankAccountDigit: string;
}

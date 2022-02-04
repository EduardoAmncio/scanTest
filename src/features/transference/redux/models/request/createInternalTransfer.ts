import { ApiRequest } from "_config/api";

export interface CreateInternalTransferRequest extends ApiRequest {
  toTaxId?: string;
  transferValue?: number;
  bank?: String;
  bankBranch?: String;
  bankAccount?: String;
  bankAccountDigit?: String;
  transferDate?: Date | null;
  tags?: string[];
  description?: string;
}

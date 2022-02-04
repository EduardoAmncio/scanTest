import { ApiRequest } from "_config/api";

export interface CreatePaymentRequest extends ApiRequest {
  name?: string;
  taxId?: string;
  bank?: string;
  bankBranch?: string;
  bankAccount?: string;
  bankAccountDigit?: string;
  receiverName?: string;
  receiverTaxId?: string;
  payerName?: string;
  payerTaxId?: string;
  barcode?: string;
  paymentValue?: number;
  paymentDate?: Date | null;
  dueDate?: Date | null;
  discountValue?: number;
  description?: string;
  tags?: string[];
}

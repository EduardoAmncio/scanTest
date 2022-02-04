import { BoletoType } from "../boletoType";

export interface GetDetailsOnCipResponse {
  receiverTaxId?: string;
  receiverName?: string;
  payerTaxId?: string;
  payerName?: string;
  paymentValue?: number;
  originalPaymentValue?: number;
  dueDate?: Date;
  discountValue?: number;
  fineValue?: number;
  tags?: string[];
  paymentDate?: Date;
  description?: string;
  canBePaid?: Boolean;
  type?: BoletoType;
  bankName?: string;
}

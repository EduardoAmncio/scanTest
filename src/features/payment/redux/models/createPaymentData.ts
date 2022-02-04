export interface CreatePaymentData {
  tags?: string[];
  paymentDate?: Date;
  description?: string;
  paymentValue?: number;
  originalPaymentValue?: number;
  minimumPaymentDate?: Date;
}

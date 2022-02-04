import { GetDetailsOnCipResponse } from "./models/response/getDetailsOnCIP";

export interface PaymentState {
  barcode?: string;
  paymentData?: GetDetailsOnCipResponse;
  minimumPaymentDate?: Date;
  loading: boolean;
  errorMessage?: string;
}

export class LoadingPaymentState implements PaymentState {
  loading: boolean = true;
  errorMessage: undefined;

  constructor(
    public barcode?: string,
    public paymentData?: GetDetailsOnCipResponse
  ) {}
}
export class StartPaymentState implements PaymentState {
  loading: boolean = false;
  errorMessage: undefined;

  constructor(
    public barcode?: string,
    public paymentData?: GetDetailsOnCipResponse,
    public minimumPaymentDate?: Date
  ) {}
}

export class SuccessPaymentState implements PaymentState {
  loading: boolean = false;
  errorMessage: undefined;

  constructor(
    public barcode: string,
    public paymentData: GetDetailsOnCipResponse,
    public minimumPaymentDate?: Date
  ) {}
}

export class ErrorPaymentState implements PaymentState {
  loading: boolean = false;

  constructor(
    public errorMessage: string,
    public barcode?: string,
    public paymentData?: GetDetailsOnCipResponse,
    public minimumPaymentDate?: Date
  ) {}
}

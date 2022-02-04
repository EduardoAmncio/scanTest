import { ApiRequest } from "_config/api";

export interface GetMinimumPaymentDateRequest extends ApiRequest {
  actualPaymentDate: Date;
  barcode: string;
}

import { ApiRequest } from "_config/api";

export interface GetDetailsByBarcodeRequest extends ApiRequest {
  barcode: string;
  accountId: number;
  userId: number;
  taxId?: string;
  description?: string;
}

export interface GetDetailsByBarcodeResponse {
  digitableLine: string;
  barcode: string;
  dueDate: Date;
  bankCode: string;
  bankName: string;
  value: number;
  concessionaireName: string;
  concessionaireCode: string;
}

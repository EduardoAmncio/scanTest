export interface GetTransactionDetailsResponse {
  value: number;
  toName: string;
  toTaxId: string;
  date: Date;
  description: string;
  tags: string[];
  externalIdentifier: string;
  status: number;
}
